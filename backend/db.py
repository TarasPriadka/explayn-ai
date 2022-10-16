from sqlite3 import Cursor
from tempfile import NamedTemporaryFile
from tkinter import W
from annoy import AnnoyIndex

import numpy as np
import config.config as config, config.sql as sql
import psycopg2
from models import Agent


class DbConnection():
    def __init__(self):
        self.connection = psycopg2.connect(config.db_url) 
        self.cursor = self.connection.cursor()
        self.create_db()

    @property
    def conn(self):
        return self.connection

    @property
    def cur(self):
        return self.cursor

    def create_db(self):
        self.cur.execute(sql.CREATE_DB)
        self.conn.commit()
        self.create_table()
    
    def create_table(self):
        self.cur.execute(sql.CREATE_AGENTS_TABLE)
        self.conn.commit()
    
    def insert_agent(self, agent: Agent):
        agent.annoy_index.save('/tmp/annoy.index')
        with open('/tmp/annoy.index', 'rb') as f:
            dump = f.read()
        self.cur.execute(sql.INSERT_AGENT, {
            'id': str(agent.id),
            'user_id': str(agent.user_id),
            'model_id': str(agent.model_id),
            'name': agent.name,
            'ref_urls': agent.ref_urls,
            'texts': agent.texts,
            'embeddings': agent.embeddings.tobytes(),
            'annoy_index': dump,
            'status': agent.status,
        })
        self.conn.commit()

    def get_agent(self, id: str, user_id: str):
        self.cur.execute(sql.GET_AGENT, {
            'id': str(id),
            'user_id': str(user_id)
        })
        out = self.cur.fetchone()
        print(out)
        if not out:
            return None
        with open('/tmp/annoy.index', 'wb') as f:
            f.write(out[7])
        annoy_index = AnnoyIndex(config.embedding_size, 'angular')
        annoy_index.load('/tmp/annoy.index')
        return Agent(
            id=out[0],
            user_id=out[1],
            model_id=out[2],
            status=out[8],
            name=out[3],
            ref_urls=out[4],
            texts=out[5],
            embeddings=np.frombuffer(out[6]),
            annoy_index=annoy_index
        )

    def get_agents_ids(self, user_id: str):
        self.cur.execute(sql.GET_AGENTS_IDS, {
            'user_id': str(user_id)
        })
        return self.cur.fetchall()

    def delete_agent(self, id: str, user_id: str):
        self.cur.execute(sql.DELETE_AGENT, {
            'id': str(id),
            'user_id': str(user_id)
        })
        self.conn.commit()

    def update_agent(self, id: str, user_id: str, name: str):
        self.cur.execute(sql.UPDATE_AGENT, {
            'id': str(id),
            'user_id': str(user_id),
            'name': name
        })
        self.conn.commit()

