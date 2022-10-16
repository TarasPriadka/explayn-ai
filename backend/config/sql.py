CREATE_DB = 'create database if not exists chatbot'

CREATE_AGENTS_TABLE = '''
    CREATE TABLE IF NOT EXISTS agents (
        id UUID PRIMARY KEY,
        user_id UUID,
        model_id STRING,
        name STRING,
        ref_urls STRING[],
        texts STRING[],
        embeddings BYTES,
        annoy_index BYTES,
        status STRING,
        INDEX user_id_idx (user_id)
    );
'''

INSERT_AGENT = '''
    INSERT INTO agents (
        id, user_id, model_id, name, ref_urls, texts, embeddings, annoy_index, status
    ) VALUES (
        %(id)s, %(user_id)s, %(model_id)s, %(name)s, %(ref_urls)s, %(texts)s, %(embeddings)s, %(annoy_index)s, %(status)s
    );
'''

GET_AGENT = '''
    SELECT * FROM agents WHERE id = %(id)s AND user_id = %(user_id)s;
'''

GET_AGENTS_IDS = '''
    SELECT id FROM agents WHERE user_id = %(user_id)s;
'''

DELETE_AGENT = '''
    DELETE FROM agents WHERE id = %(id)s AND user_id = %(user_id)s;
'''

UPDATE_AGNET = '''
    UPDATE agents SET name = %(name)s WHERE id = %(id)s AND user_id = %(user_id)s;
'''