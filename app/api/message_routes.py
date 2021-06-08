from flask import Blueprint
from app.models import Message, db

message_routes = Blueprint('messages', __name__)

########################## GET A CONVERSATION ######################
@message_routes('/<int:userId>/<int:partnerId')
def get_conversation(userId, partnerId):

    messages = Message.query \
        .filter(Message.senderId == userId) | (Message.recieverId == userId) \
        .filter(Message.senderId == partnerId) | (Message.recieverId == partnerId) \
        .all()
    return {'messages': [message.to_dict() for message in messages]}

########################## POST A MESSAGE #########################

