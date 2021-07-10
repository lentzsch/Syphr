from app.forms.message_encryption_form import MessageEncryptionForm
from flask import Blueprint, session, request
from flask_login import current_user, login_required
from app.models import Message, Conversation, db
from app.enigma import encrypt



message_routes = Blueprint('messages', __name__)

############################# GET A CONVERSATION ##############################
@message_routes.route('/<int:partnerId>')
@login_required
def get_conversation(partnerId):

    conversations = list(filter(lambda convo : partnerId in [user.id for user in convo.users], current_user.conversations))
    return {conversation.id: conversation.to_dict() for conversation in conversations}


####################### CREATE NEW CONVERSATION ##############################
@message_routes.route('/<int:partnerId>/new')
@login_required
def create_new_conversation(partnerId):
        new_conversation = Conversation(

        )

########################## ENCRYPT/DECRYPT A MESSAGE #########################
@message_routes.route('/encrypt', methods=['POST'])
def encrypt_message():
    data = request.json
    # print("REQUEST ------->", request)
    print("DATA ------>", data)
    message = data['message']
    settings = data['settings']
    # print("SETTINGS ------->", settings['plugboard'])
    translated_message = encrypt(message, settings)
    return {'translatedMessage': translated_message}
