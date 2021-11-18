from flask import Blueprint
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)

@user_routes.route('/<code_name>')
@login_required
def user(code_name):
    users = User.query.filter(User.code_name.ilike(f'%{code_name}%')).all()
    return {user.id: user.to_dict() for user in users}
