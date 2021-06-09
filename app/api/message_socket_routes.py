from flask import Blueprint, jsonify, session, request
from app.models import User, Message, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from app import socketio

@socketio.on('message')
def handle_message(message_dict):
    if current_user.is_authenticated:
        new_message = Message(**message_dict, sender=current_user)
        db.session.add(new_message)
        db.session.commit()
        socketio.emit(new_message.to_dict(), to=new_message.conversationId)
