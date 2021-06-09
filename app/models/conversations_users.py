from .db import db

conversations_users = db.Table(
    "conversations_users",
    db.Column('conversationId', db.Integer, db.ForeignKey('conversations.id'), primary_key = True),
    db.Column('userId', db.Integer, db.ForeignKey('users.id'), primary_key = True)
)
