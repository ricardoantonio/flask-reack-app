from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='../frontend/build')

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/api/hello')
def index():
    return {'message': '¡Hola mundo, la API ya está funcionando!'}

if __name__ == "__main__":
    app.run(host='0.0.0.0')