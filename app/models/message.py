from .db import db

class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key = True)
    message = db.Column(db.Text, nullable = False)
    selfDestructDate = db.Column(db.DateTime)
    senderId = db.Column(db.Integer, db.ForeignKey('users.id'))
    recieverId = db.Column(db.Integer, db.ForeignKey('users.id'))

    def to_dict(self):
        return {
            "id": self.id,
            "message": self.message,
            "selfDestructDate": self.selfDestructDate,
            "senderId": self.senderId,
            "recieverId": self.recieverId
        }