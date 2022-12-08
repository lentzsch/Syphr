from .db import db, environment, SCHEMA, add_prefix_for_prod

conversations_users = db.Table(
    "conversations_users",
    db.Column('conversationId', db.Integer, db.ForeignKey('conversations.id'), primary_key = True),
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key = True)
)

if environment == "production":
    conversations_users.schema = SCHEMA
