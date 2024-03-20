from flask import Flask, request, jsonify
from flask_cors import CORS
import database

# print("hello")
db = database.Database()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])
# print("hello2")

@app.route('/')
def home():
    return "Home Page"

@app.route('/projects')
def projects():
    project_des = request.args.get('project_des')
    response = db.search_project(project_des)
    print("Response ", response)
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
            "year":detail[12],
            "num_projects":detail[13],
            "email":detail[14],
            "linkedin":detail[15]
        }
        result["student-{}".format(count)] = temp_data
        count = count + 1

    stu_list = jsonify(result)
    return stu_list


# if __name__ == "_main_":
app.run(debug=True)