"""create tables

Revision ID: a9f5cedf54c9
Revises: aa704d2856eb
Create Date: 2021-06-10 08:37:48.073571

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a9f5cedf54c9'
down_revision = 'aa704d2856eb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('messages', sa.Column('plugboard_settings', sa.ARRAY(sa.String()), nullable=True))
    op.add_column('messages', sa.Column('reflector_settings', sa.String(), nullable=True))
    op.add_column('messages', sa.Column('rotor_settings', sa.ARRAY(sa.String()), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('messages', 'rotor_settings')
    op.drop_column('messages', 'reflector_settings')
    op.drop_column('messages', 'plugboard_settings')
    # ### end Alembic commands ###