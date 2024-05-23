from flask import Flask, request, jsonify
from flask_cors import CORS
import database

db = database.Database()
# print("Hello", db.p())
app = Flask(__name__)
# CORS(app, origins=["http://localhost:5173"])
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow access from all origins
# print("hello2")

@app.route('/')
def home():
    return "Home Page"

@app.route('/projects')
def projects():
    project_des = request.args.get('project_des')
    # minor = request.args.get('minor')
    response = db.search_project(project_des)
    print("Response ", response)
    # response = db.search_project(project_des, minor)
    result = {}
    count = 1
    for detail in response:
        temp_data = {
            "reg_no" : detail[0],
            "project_name": detail[1],
            "project_domain":detail[2],
            "project_des": detail[3],
            "project_date": detail[4],
            "tech_used": detail[5],
            "name":detail[7],
            "city":detail[8],
            "state":detail[9],
            "country":detail[10],
            "minor":detail[11],
            "department":detail[12],
            "year":detail[13],
            "num_projects":detail[14],
            "email":detail[15],
            "linkedin":detail[16]
        }
        result["student-{}".format(count)] = temp_data
        count = count + 1

    stu_list = jsonify(result)
    return stu_list

@app.route('/minor')
def minor():
    minor_detail = request.args.get('minor_detail')
    response = db.student_minor(minor_detail)
    print("Response ", response)
    result = {}
    count = 1
    for detail in response:
        temp_data = {
            "reg_no": detail[0],
            "project_name": detail[1],
            "project_domain": detail[2],
            "project_des": detail[3],
            "project_date": detail[4],
            "tech_used": detail[5],
            "name": detail[7],
            "city": detail[8],
            "state": detail[9],
            "country": detail[10],
            "minor": detail[11],
            "year": detail[12],
            "num_projects": detail[13],
            "email": detail[14],
            "linkedin": detail[15]
        }
        result["student-{}".format(count)] = temp_data
        count = count + 1

    stu_list = jsonify(result)
    return stu_list

@app.route('/student')
def student():
    reg_no = request.args.get('reg_no')
    # minor = request.args.get('minor')
    response = db.search_student(reg_no)
    print("Response ", response)
    # response = db.search_project(project_des, minor)
    result = {}
    count = 1
    for detail in response:
        temp_data = {
            "reg_no" : detail[0],
            "project_name": detail[1],
            "project_domain":detail[2],
            "project_des": detail[3],
            "project_date": detail[4],
            "tech_used": detail[5],
            "name":detail[7],
            "city":detail[8],
            "state":detail[9],
            "country":detail[10],
            "minor":detail[11],
            "department":detail[12],
            "year":detail[13],
            "num_projects":detail[14],
            "email":detail[15],
            "linkedin":detail[16]
        }
        result["project-{}".format(count)] = temp_data
        count = count + 1

    stu_projects = jsonify(result)
    return stu_projects

# search teachers
@app.route('/teacher')
def teacher():
    dep_or_dom = request.args.get("dep_or_dom")
    response = db.search_teacher(dep_or_dom)

    result = {}
    count = 1
    for detail in response:
        temp_data = {
            "name": detail[0],
            "uid": detail[1],
            "qualification": detail[2],
            "email": detail[3],
            "department": detail[4],
            "domain": detail[5],
            "phone": detail[6],
            "no_of_research_paper": detail[7],
            "no_of_students_guide": detail[8]
        }
        result["teacher-{}".format(count)] = temp_data
        count = count + 1

    teacher_list = jsonify(result)
    return teacher_list

@app.route('/alumni')
def alumni():
    company = request.args.get('company')
    response = db.search_alumni(company)
    result = {}
    count = 1
    for detail in response:
        temp_data = {
            "name": detail[0],
            "email": detail[1],
            "linkedin": detail[2],
            "position": detail[3],
            "company": detail[4],
            "year_of_placement": detail[5]
        }
        result["alumni-{}".format(count)] = temp_data
        count = count + 1

    alumni_list = jsonify(result)
    return alumni_list





# if __name__ == "_main_":
app.run(debug=True)