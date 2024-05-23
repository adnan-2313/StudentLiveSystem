import pandas as pd
from sqlalchemy import create_engine
from urllib.parse import quote
df = pd.read_csv("capston_project_teachers.csv")

# Database connection details
db_username = "root"
db_password = "1234567890"
hostname = "127.0.0.1"
database_name = "capston_project"
table_name = "teachers"

# Create the connection stringp
connection_string = f"mysql+pymysql://{db_username}:{quote(db_password)}@{hostname}/{database_name}"

# Create the SQLAlchemy engine
engine = create_engine(connection_string)

# Write the DataFrame to the MySQL database
df.to_sql(table_name, con=engine, index=False, if_exists='replace')