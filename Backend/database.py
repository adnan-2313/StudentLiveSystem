import mysql.connector
# import mysql.connector.python.rf

class Database:
    def __init__(self):
        try:
            self.conn = mysql.connector.connect(
                host='127.0.0.1',
                user='root',
                password='1234567890',
                database='capston_project'
            )
            self.mycursor = self.conn.cursor()
            print('Connection established')

        except mysql.connector.Error as err:
            print(f'Connection error: {err}')

    def search_project(self, project_details):
        try:
            self.mycursor.execute("""SELECT * FROM project t1 JOIN student t2 ON t1.registration_number = t2.registration_number 
                                    WHERE CONCAT(project_name, ' ', project_description) like '%{}%' ORDER BY project_date DESC""".format(project_details))
            result = self.mycursor.fetchall()
            return result

        except mysql.connector.Error as err:
            print(f'Error during query execution: {err}')
