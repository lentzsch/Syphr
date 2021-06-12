from app.models import db, Message, User, Conversation

def seed_messages():

    default = '''{'plugboard': {'Q': 'Q', 'W': 'W', 'E': 'E', 'R': 'R', 
    'T': 'T', 'Z': 'Z', 'U': 'U', 'I': 'I', 'O': 'O', 'A': 'A', 'S': 'S', 
    'D': 'D', 'F': 'F', 'G': 'G', 'H': 'H', 'J': 'J', 'K': 'K', 'P': 'P', 'Y': 'Y', 'X': 'X', 'C': 'C', 'V': 'V', 'B': 'B', 'N': 'N', 'M': 'M', 'L': 'L'}, 
    'rotorToSet': '', 
    'rotor1': {'name': 'III', 'position': 1}, 
    'rotor2': {'name': 'II', 'position': 1}, 
    'rotor3': {'name': 'I', 'position': 1}, 
    'reflector': 'B', 
    'outputMessage': ''}'''
    
    c = User.query.get(5)
    turing_c = Conversation.query.get(1)
    message_one = Message(
        message='XINLRDKMJHUSETOKEOBTUXOUNCXQFXOYJUYQELDOEUCOWWOFZVMLPDYQKETAFQSYHZECFEXIKLXOSDAJTFOPNOYQZJPWQRQNZCVBEVTCACXVBRFDQAPBHCDXWTNUVUGANJMIAYATH',
        settings = default,
        senderId = 5,
        sender = c
        )
    turing_c.messages.append(message_one)
    db.session.add(turing_c)

    db.session.commit()

def undo_messages():
    db.session.execute('TRUNCATE messages RESTART IDENTITY CASCADE;')
    db.session.commit()
