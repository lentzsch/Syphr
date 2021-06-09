from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    turing = User(code_name='Turing', email='a.turing@bletchlypark.gov',
                password='password')
    db.session.add(turing)

    tricycle = User(code_name="Tricycle", email='d.popov@mi6.gov',
                password='password')
    db.session.add(tricycle)

    artist = User(code_name="Artist", email='j.jebsen@mi6.gov',
                    password='password')
    db.session.add(artist)

    dreadnought = User(code_name="Dreadnaught", email='i.popov@mi6.gov',
                    password='password')
    db.session.add(dreadnought)

    c = User(code_name="C", email='s.menzies@mi6.gov',
                    password='password')
    db.session.add(c)

    tar = User(code_name="TAR", email='t.robinson@mi6.gov',
                    password='password')
    db.session.add(tar)

    # tricycle = User(code_name="Tricycle", email='d.popov@mi6.gov',
    #                 password='password')
    # tricycle = User(code_name="Tricycle", email='d.popov@mi6.gov',
    #                 password='password')


    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
