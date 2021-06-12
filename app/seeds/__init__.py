from app.seeds.conversations import seed_conversations, undo_conversations
from app.seeds.messages import seed_messages, undo_messages
from flask.cli import AppGroup
from .users import seed_users, undo_users

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_conversations()
    seed_messages()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_conversations()
    undo_messages
    # Add other undo functions here
