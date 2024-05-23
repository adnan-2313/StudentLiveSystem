import mysql.connector

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

        except:
            print('Connection error')

    def search_project(self, project_details):
        try:
            self.mycursor.execute("""SELECT * FROM projects t1 JOIN students t2 ON t1.registration_number = t2.registration_number 
                                    WHERE CONCAT(project_name, ' ', project_description) like '%{}%' ORDER BY project_date DESC""".format(project_details))
            result = self.mycursor.fetchall()
            # print("In Database Class", result)
            return result

        except mysql.connector.Error as err:
            print(f'Error during query execution: {err}')

    def search_student(self, reg_no):
        try:
            self.mycursor.execute("""SELECT * FROM projects t1 JOIN students t2 ON t1.registration_number = t2.registration_number 
                                    WHERE t2.registration_number='{}'""".format(reg_no))
            result = self.mycursor.fetchall()
            # print("In Database Class", result)
            return result

        except mysql.connector.Error as err:
            print(f'Error during query execution: {err}')
    # search teachers
    def search_teacher(self, dep_or_dom):
        if dep_or_dom == 'Computer Science' or dep_or_dom == 'ECE' or dep_or_dom == 'Civil' or dep_or_dom == 'Mechanical Engineering' or dep_or_dom == 'Electrical Engineering':
            try:
                self.mycursor.execute("""SELECT * FROM teachers where department = '{}' ORDER BY no_of_students_guided DESC""".format(dep_or_dom))
                result = self.mycursor.fetchall()
                # print("In Database Class", result)
                return result

            except mysql.connector.Error as err:
                print(f'Error during query execution: {err}')

        else:
            try:
                self.mycursor.execute("""SELECT * FROM teachers where domain = '{}' ORDER BY no_of_students_guided DESC""".format(dep_or_dom))
                result = self.mycursor.fetchall()
                # print("In Database Class", result)
                return result

            except mysql.connector.Error as err:
                print(f'Error during query execution: {err}')

    def search_alumni(self, company_name):
        try:
            self.mycursor.execute(
                """SELECT * FROM alumni where company_name = '{}'""".format(company_name))
            result = self.mycursor.fetchall()
            # print("In Database Class", result)
            return result

        except mysql.connector.Error as err:
            print(f'Error during query execution: {err}')

    def p(self):
        print("In database class")