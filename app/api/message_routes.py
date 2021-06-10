from app.api.auth_routes import authenticate
from flask import Blueprint
from flask_login import current_user, login_required
from app.models import Message, Conversation, db
from app.enigma import encrypt


message_routes = Blueprint('messages', __name__)

########################## GET A CONVERSATION ######################
@message_routes.route('/<int:partnerId>')
@login_required
def get_conversation(partnerId):

    conversations = list(filter(lambda convo : partnerId in [user.id for user in convo.users], current_user.conversations))
    return {conversation.id: conversation.to_dict() for conversation in conversations}

########################## ENCRYPT/DECRYPT A MESSAGE #########################
@message_routes.route('/<code_name>/encrypt')
@login_required
def encrypt_message():
    