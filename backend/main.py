from tkinter import W
import uuid
from fastapi import FastAPI, Form, UploadFile
from db import DbConnection
from embed import Cohere
from models import *
import config.config as config


app = FastAPI()
co = Cohere()
db = DbConnection()


@app.get("/")
def home():
    return "Hello World!"


@app.post("/query")
def query(text: str = Form()):
    q = Query(agent_id=config.DEFAULT_AGENT_ID, query=text)
    response, sources = co.query(q)
    print(response, sources)
    return f'{response} \n\n Here are some sources: \n - {sources[0]} \n - {sources[1]}',


@app.post("/create_agent")
def new_agent(create_agent_request: AgentCreateRequest, data: UploadFile):
    embeds, annoy_index = co.create_embed(create_agent_request)
    agent: Agent = Agent(
        id=uuid.uuid4(),
        user_id=config.DEFAULT_USER_ID,
        name=create_agent_request.name,
        ref_urls=create_agent_request.ref_urls,
        texts=create_agent_request.texts,
        embeddings=embeds,
        annoy_index=annoy_index
    )
    db.insert_agent(agent)


@app.get("/list_agents")
def agents():
    user_id = config.DEFAULT_USER_ID
    return {'agents': db.get_agents_ids(user_id)}


@app.post("/update_agent")
def update_agent():
    raise NotImplementedError


@app.post("/delete_agent")
def delete_agent():
    raise NotImplementedError
