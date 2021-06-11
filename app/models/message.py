from sqlalchemy.orm import backref
from .db import db

class Message(db.Model):
    __tablename__ = 'messages'

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
            "plugboard_settings": self.plugboard_settings,
            "rotor_settings": self.rotor_settings,
            "reflector_settings": self.reflector_settings,
            "selfDestructDate": self.selfDestructDate,
            "senderId": self.senderId,
            "createdAt": self.createdAt,
            "updatedAt": self.createdAt,
            "senderCodeName": self.sender.code_name,
        }
