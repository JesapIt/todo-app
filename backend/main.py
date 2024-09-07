from flask import Flask, request, jsonify
from flask_cors import CORS

# NON TOCCARE QUESTA PARTE DI CODICE

app = Flask(__name__)

# Configurazione CORS
CORS(app)

# ORA PUOI INIZIARE A SCRIVERE IL TUO CODICE

# Endpoint per la creatione di un task
@app.route('/creaTask', methods=['GET', 'POST', 'DELETE', 'PUT'])
def richiesta1():
    # Logica della prima richiesta
    
    # Risposta della richiesta
    return jsonify({"message": "risposta richiesta creaTask"})

# Endpoint per la visualizzazione dei tasks
@app.route('/ottieniTasks', methods=['GET', 'POST', 'DELETE', 'PUT'])
def richiesta2():
    # Logica della seconda richiesta

    # Risposta della richiesta
    return jsonify({"message": "risposta richiesta ottieniTasks"})

# Endpoint per la cancellazione di un task
@app.route('/cancellaTask', methods=['GET', 'POST', 'DELETE', 'PUT'])
def richiesta3():
    # Logica della terza richiesta
    
    # Risposta della richiesta
    return jsonify({"message": "risposta richiesta cancellaTask"})

# NON TOCCARE QUESTA PARTE DI CODICE

# Esecuzione del server
if __name__ == '__main__':
    app.run(port='8080', debug=True)
