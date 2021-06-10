from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, TextAreaField, IntegerField, DateTimeField
from wtforms.validators import DataRequired, ValidationError


class MessageEncryptionForm(FlaskForm):
    message = TextAreaField('message', validators=[DataRequired()])
    plugboard_settings = StringField('plugboard_settings')
    rotor_settings = StringField('rotor_settings', validators=[DataRequired()])
    reflector_settings = StringField('reflector_settings', validators=[DataRequired()])
    selfDestructDate = DateTimeField('selfDestructDate')
    senderId = IntegerField('senderId', validators=[DataRequired()])
    conversationId = IntegerField('conversationId', validators=[DataRequired()])
    
