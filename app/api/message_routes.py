from app.forms.message_encryption_form import MessageEncryptionForm
from flask import Blueprint, session, request
from flask_login import current_user, login_required
from app.models import Message, Conversation, User, db
from app.enigma import encrypt



message_routes = Blueprint('messages', __name__)

############################# GET A CONVERSATION ##############################
@message_routes.route('/<int:partnerId>')
@login_required
def get_conversation(partnerId):

    conversations = list(filter(lambda convo : partnerId in [user.id for user in convo.users], current_user.conversations))
    return {conversation.id: conversation.to_dict() for conversation in conversations}


####################### CREATE NEW CONVERSATION ##############################
@message_routes.route('/conversation/new', methods=['POST'])
@login_required
def create_new_conversation():
        data=request.json
        userId=data["userId"]
        partnerId=data["partnerId"]
        user = User.query.get(userId)
        partner = User.query.get(partnerId)

        new_conversation = Conversation()
        new_conversation.users.append(user)
        new_conversation.users.append(partner)
        db.session.add(new_conversation)
        db.session.commit()
        return new_conversation.to_dict()
        
########################## ENCRYPT/DECRYPT A MESSAGE #########################
@message_routes.route('/encrypt', methods=['POST'])
def encrypt_message():
    data = request.json
    message = data['message']
    settings = data['settings']
    translated_message = encrypt(message, settings)
    return {'translatedMessage': translated_message}
