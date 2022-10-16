from sqlite3 import Cursor
from tkinter import W
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
        self.cur.execute(sql.INSERT_AGENT, (agent.id, agent.user_id, agent.name, agent.ref_urls, agent.texts, agent.embeddings, agent.annoy_index))
        self.conn.commit()

    def get_agent(self, id: str, user_id: str):
        self.cur.execute(sql.GET_AGENT, (id, user_id))
        return self.cur.fetchone()

    def get_agents_ids(self, user_id: str):
        self.cur.execute(sql.GET_AGENTS_IDS, (user_id,))
        return self.cur.fetchall()

    def delete_agent(self, id: str, user_id: str):
        self.cur.execute(sql.DELETE_AGENT, (id, user_id))
        self.conn.commit()

    def update_agent(self, id: str, user_id: str, name: str):
        self.cur.execute(sql.UPDATE_AGENT, (id, user_id, name))
        self.conn.commit()

