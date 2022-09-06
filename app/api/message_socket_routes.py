from app.models import Message, db
from flask_login import current_user, login_required
from flask_socketio import SocketIO
import os

if os.environ.get("FLASK_ENV") == "production":
    origins = [
        "http://syphr.herokuapp.com/",    
        "https://syphr.herokuapp.com/"
    ]
else:
    origins = "*"

socketio = SocketIO(cors_allowed_origins=origins)

@socketio.on('message')
@login_required
def handle_message(message_dict):
    if current_user.is_authenticated:
        new_message = Message(**message_dict, sender=current_user)
        db.session.add(new_message)
        db.session.commit()
        socketio.emit(new_message.to_dict(), to=new_message.conversationId)
