# Backend

## Setup

```
conda create -n explayn python=3.10
conda activate explayn
pip install bs4 annoy numpy pandas fastapi cohere "uvicorn[standard]"
uvicorn main:app --reload  # remove --reload for "production"
```
