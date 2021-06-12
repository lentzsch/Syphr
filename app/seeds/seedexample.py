# runs before seeding messages
def seed_conversations():
  already_existing_user_1 = User.query.get(1)
  new_conversation_1 = Conversation(property1=whatever, property2=whatever)
  already_existing_user.conversations.append(new_conversation_1)
  db.session.add(new_conversation_1)
  db.session.commit()
# different file


def seed_messages():
  already_existing_user_1 = User.query.get(1)
  already_existing_conversation_1 = Conversation.query.get(1)
  some_list_of_message_contents = ['blah', 'blah2', 'blah3']
  for contents in some_list_of_message_contents:
    already_existing_conversation_1.messages.append(
        Message(
            contents=contents,
            sender=already_existing_user_1
        )
    )
  # cheating by re-adding this conversation
  db.session.add(already_existing_conversation_1)
  # which will force SQLAlchemy to add all of its
  # associations as well, including those messages
  db.session.commit()
