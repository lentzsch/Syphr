from app.models import db, Conversation, User

def seed_conversations():
    
    # Turing and C (demo conversation)
    turing = User.query.get(1)
    c = User.query.get(5)
    turing_c = Conversation()
    turing.conversations.append(turing_c)
    c.conversations.append(turing_c)
    db.session.add(turing_c)

    db.session.commit()

def undo_conversations():
    db.session.execute('TRUNCATE conversations RESTART IDENTITY CASCADE;')
    db.session.commit()
