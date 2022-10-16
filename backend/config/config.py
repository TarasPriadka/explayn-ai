import uuid


data_dir = 'data/'
txt_dir = 'data/txt/'
links_path = 'data/161_links.txt'

# cohere
api_key = 'sMGG1mMkfOqx7zoZSPgXXkLmfWgsbSfIW1XMtR9j'
embed_model = 'medium'
# generate_model = 'e4759a69-7173-4458-bc78-594ae7aa1992-ft' # 161
generate_model = '226da206-2cf7-43a8-8ee4-75b0262ec510-ft' # sponsors
embedding_size = 2048

# other
verbose = True

# db
db_url = "postgresql://taras:ZdHJyIbTgBrLoIeAPHNZ-w@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dearly-guppy-5850"
DEFAULT_USER_ID = uuid.UUID('{00010203-0405-0607-0809-0a0b0c0d0e0f}')
DEFAULT_AGENT_ID = uuid.UUID('{00010203-0405-0607-0809-0a0b0c0d0e0f}')