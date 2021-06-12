"""creating tables

Revision ID: d3ba8441c48f
Revises: 10246ea94e51
Create Date: 2021-06-11 20:57:42.442913

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd3ba8441c48f'
down_revision = '10246ea94e51'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('conversations', 'test_column')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('conversations', sa.Column('test_column', sa.VARCHAR(), autoincrement=False, nullable=True))
    # ### end Alembic commands ###