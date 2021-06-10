from app.models import db, Message
import json
def seed_messages():

    plugboard_settings_one = json.dumps([(0, 3), (4, 5), (6, 7)])
    rotors_settings_one = json.dumps([('III', 0), ('II', 0), ('I', 0)])
    reflector_settings_one = 'B'
    
    message_one = Message(
        message = 'IINHHAAMJGXUFEOKJRDLUYVPYSRQNZNYWQEJWEHSNGCMLZWKCXMHVYMHWYWIUMLLPGJGEYSSTTDCPOKQLKTCPXJLEHSK',
        plugboard_settings = plugboard_settings_one,
        rotors_settings = rotors_settings_one,
        reflector_settings = reflector_settings_one,
        selfDestructDate = None,
        senderId = 5
        
        )
