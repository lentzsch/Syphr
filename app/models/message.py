# from sqlalchemy.orm import backref
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Message(db.Model):
    __tablename__ = 'messages'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    message = db.Column(db.Text, nullable = False)
    settings = db.Column(db.Text, nullable= False)
    senderId = db.Column(db.Integer, db.ForeignKey('users.id'))
    conversationId = db.Column(db.Integer, db.ForeignKey('conversations.id'))
    createdAt = db.Column(db.DateTime, server_default = db.func.now())
    updatedAt = db.Column(db.DateTime, server_default=db.func.now())
    sender = db.relationship('User', backref="sent_messages")

    def to_dict(self):
        return {
            "id": self.id,
            "message": self.message,
            "settings": self.settings,
            "senderId": self.senderId,
            "createdAt": self.createdAt,
            "updatedAt": self.createdAt,
            "senderCodeName": self.sender.code_name,
        }
