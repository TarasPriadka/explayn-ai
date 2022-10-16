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


@app.post("/query")
def query(query: Query):
    response, sources = co.query(query.query)
    return ExplainedResponse(
        query=query.query,
        response=response,
        sources=sources
    )