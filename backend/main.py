from tkinter import W
from fastapi import FastAPI
from pydantic import BaseModel
from embed import Cohere

app = FastAPI()
co = Cohere()


class Query(BaseModel):
    query: str


class ExplainedResponse(BaseModel):
    query: str
    response: str
    sources: list[str]


@app("/")
def home():
    return "Hello World!"


@app.post("/query")
def query(query: Query):
    response, sources = co.query(query.query)
    return ExplainedResponse(
        query=query.query,
        response=response,
        sources=sources
    )


@app.post("/create_agent")
def new_agent():
    raise NotImplementedError


@app.get("/list_agents")
def agents():
    raise NotImplementedError


@app.post("/update_agent")
def update_agent():
    raise NotImplementedError


@app.post("/delete_agent")
def delete_agent():
    raise NotImplementedError
