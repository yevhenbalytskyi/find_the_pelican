from flask import Flask, url_for, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html")
