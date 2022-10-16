from uuid import UUID
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
	name: str
	ref_urls: list[str]
	texts: list[str]
	embeddings: bytes
	annoy_index: bytes


class AgentCreateRequest(BaseModel):
    name: str
    ref_urls: list[str]
    texts: list[str]


class AgentUpdateRequest(BaseModel):
    name: str
