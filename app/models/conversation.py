from .db import db
from .conversations_users import conversations_users

class Conversation(db.Model):
    __tablename__ = 'conversations'

    id = db.Column(db.Integer, primary_key = True)

    messages = db.relationship('Message', backref="conversation")

    users = db.relationship(
        'User',
        secondary=conversations_users,
        backref='conversations'
    )

    def to_dict(self):
        return {
            "id": self.id,
            "messages": [message.to_dict() for message in self.messages],
            "users": [user.to_dict() for user in self.users]
        }