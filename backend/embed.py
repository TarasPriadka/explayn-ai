import re
import cohere
import pandas as pd
from annoy import AnnoyIndex
import os
import numpy as np
import config


class Cohere:

    def __init__(self):
        self.co = cohere.Client(config.api_key)
        self.load_data()

    def load_data(self):
        with open(config.links_path) as f:
            self.links = [a.strip() for a in f.readlines()]
        ref_fnames = [f'{i}.txt' for i in range(len(self.links))]
        self.texts = []
        for fname in ref_fnames:
            with open(config.txt_dir + fname, 'r') as f:
                text = f.read()
            # text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
            text = re.sub(r'\s+', ' ', text)
            text = text.lower()
            text = text.strip()
            self.texts.append(text)
        self.df = pd.DataFrame({'text': self.texts})

        ann_path = f'{config.data_dir}/test.ann'
        if not os.path.exists(ann_path):
            embeds = self.co.embed(texts=self.texts,
                            model=config.embed_model,
                            truncate="LEFT").embeddings
            embeds = np.array(embeds)
            np.save('data/embeds.npy', embeds)

            # Create the search index, pass the size of embedding
            search_index = AnnoyIndex(embeds.shape[1], 'angular')
            # Add all the vectors to the search index
            for i in range(len(embeds)):
                search_index.add_item(i, embeds[i])

            search_index.build(10) # 10 trees
            search_index.save('data/test.ann')
        else:
            embeds = np.load('data/embeds.npy')
            search_index = AnnoyIndex(embeds.shape[1], 'angular')
            search_index.load('data/test.ann')

        self.embeds = embeds
        self.search_index = search_index


    def query(self, query: str):
        query = f"Question: {query} Answer:"

        # generative response
        response = self.co.generate( 
            model=config.generate_model, 
            prompt=query, 
            max_tokens=50, 
            temperature=0.9, 
            k=0, 
            p=0.75, 
            frequency_penalty=0, 
            presence_penalty=0, 
            stop_sequences=[], 
            return_likelihoods='NONE') 
        prediction = response.generations[0].text

        prediction = '.'.join(prediction.split('.')[:-1]) + '.'
        if config.verbose:
            print(f'Prediction: {prediction}')

        # Get the query's embedding
        resp_embed = np.array(self.co.embed(
            texts=[query + ' ' + prediction],
            model=config.embed_model,
            truncate="LEFT"
        ).embeddings)

        # Retrieve the nearest neighbors
        similar_item_ids = self.search_index.get_nns_by_vector(resp_embed[0], 10, include_distances=True)
        # Format the results
        results = pd.DataFrame(data={'texts': self.df.iloc[similar_item_ids[0]]['text'],
                                    'distance': similar_item_ids[1]})

        print(f"Query:'{query}'\nNearest neighbors:")
        print(results)

        relevant_sources = [self.links[i] for i in similar_item_ids[0]]
        return prediction, relevant_sources
