from app.api.auth_routes import authenticate
from flask import Blueprint
from flask_login import current_user, login_required
from app.models import Message, Conversation, db


message_routes = Blueprint('messages', __name__)

########################## GET A CONVERSATION ######################
@message_routes.route('/<int:partnerId>')
@login_required
def get_conversation(partnerId):

    messages = list(filter(lambda convo : partnerId in [user.id for user in convo.users], current_user.conversations))
    return {'messages': [message.to_dict() for message in messages]}

########################## POST A MESSAGE #########################

