from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, Vedashree! Your Flask app is running on the VPS. This is the home page."

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)  # Runs on port 8000
