#!todo_env/bin/python
from flask import Flask, jsonify

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web',
        'done': False
    }
]


@app.route('/todo-api/healthCheck')
def healthCheck():
    return "Ok From ToDo Micro Service"


@app.route('/todo-api/v1/tasks', methods=['GET'])
def getTasks():
    return jsonify({'tasks': tasks})


if __name__ == '__main__':
    app.run(debug=True)
