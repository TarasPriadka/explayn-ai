from typing import Any
from uuid import UUID
import annoy
import numpy as np
from pydantic import BaseModel


class Query(BaseModel):
    agent_id: UUID
    query: str


class ExplainedResponse(BaseModel):
    query: str
    response: str
    sources: list[str]


class Agent(BaseModel):
    id: UUID
    user_id: UUID
    model_id: str
    status: str # training | ready
    name: str
    ref_urls: list[str]
    texts: list[str]
    embeddings: Any # but actually np.array
    annoy_index: Any # annoy.AnnoyIndex


class AgentCreateRequest(BaseModel):
    name: str
    ref_urls: list[str]
    texts: list[str]


class AgentUpdateRequest(BaseModel):
    name: str
