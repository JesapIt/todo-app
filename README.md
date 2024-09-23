# Specifica dei requisiti TO DO APP

## TABLE OF CONTENTS
- [Specifica dei requisiti TO DO APP](#specifica-dei-requisiti-to-do-app)
  - [TABLE OF CONTENTS](#table-of-contents)
    - [Descrizione della TODO APP:](#descrizione-della-todo-app)
  - [FRONTEND](#frontend)
  - [BACKEND](#backend)
  - [DATABASE](#database)
  - [ISTRUZIONI](#istruzioni)
    - [FRONTEND](#frontend-1)
    - [BACKEND](#backend-1)
  - [CRITERI DI VALUTAZIONE](#criteri-di-valutazione)
    - [FRONTEND](#frontend-2)
    - [BACKEND](#backend-2)
    - [ESEMPIO DI TABELLA DI VALUTAZIONE](#esempio-di-tabella-di-valutazione)
  - [CONSEGNA DEL PROGETTO](#consegna-del-progetto)

### Descrizione della TODO APP:

- Un campo di input testuale per permettere all'utente di inserire nuove attività
- Un bottone "Aggiungi" per salvare la nuova attività inserita
- Una lista che mostra tutte le attività inserite
- Un'opzione per eliminare le singole attività

## FRONTEND

- Implementare tutti i punti presenti nella descrizione dell’applicazione.
- Scrivere codice sul file App.jsx (todo-app -> src-> App.jsx).

## BACKEND

Per il backend devo essere implementati 3 endpoint minimo:
1. Il primo si occuperà della creazione della task. Quindi dovrà prendere in entrata 3 parametri:
   1. ID univoco della task;
   2. Data di creazione della task;
   3.  Nome della task.
3. Il secondo si occuperà di ottenere le task per stamparle. Dovranno ritornare i seguenti dati:
   1. Data per ordinare le task in ordine crescente: da quella che è stata postata per prima a quella che è stata postata per ultima;
   2. Nome dell’attività.
5. Il terzo si occuperà della cancellazione della task (univoca sia se la task è stata completata sia se la task è stata cancellata). I dati richiesti saranno:
   1. ID della task da eliminare rimuovere.

## DATABASE

Utilizzare il file `db.json` per salvare le attività come:

```json
//esempio: db.json

[
    {
      "id": 1,
      "data": "07/09/24",
      "attivita": "studio"
    },
    {
      "id": 2,
      "data": "07/09/24",
      "attivita": "palestra"
    }
]
```

Leggi questo: https://hackernoon.com/how-to-read-and-write-json-files-in-python

## ISTRUZIONI

Per scaricare il progetto, eseguire il comando sul terminale:

```bash
git clone https://github.com/JesapIt/todo-app.git
```

O scaricare direttamente il zip cliccando su:

Code -> Download ZIP

### FRONTEND

Per eseguire il FRONTEND, prima di tutto dobbiamo installare le dipendenze necessarie. Per farlo, eseguire il comando:

```bash
cd todo-app/frontend
npm install
```
Per eseguire il frontend, eseguire il comando:

```bash
npm run dev
```

### BACKEND

Per eseguire il backend, prima di tutto dobbiamo installare le dipendenze necessarie. Per farlo, eseguire il comando:

```bash
cd todo-app/backend
pip install -r requirements.txt
```
oppure
```bash
cd todo-app/backend
python3 -m pip install -r requirements.txt
```
Per eseguire il backend, eseguire il comando:

```bash
python main.py
```

In questo modo, il backend sarà in ascolto sulla porta 8080.

## CRITERI DI VALUTAZIONE

### FRONTEND

I criteri di valutazione del frontend sono:
- Corretta implementazione dei punti presenti nella descrizione della todo app
- Corretto utilizzo di tailwind.css 
- Collegamento frontend con backend

### BACKEND

I criteri di valutazione del backend sono principalmente due:
- Correttezza del metodo HTTP utilizzato per i vari endpoint;
- Correttezza nella risposta che l'endpoint ritorna.

### ESEMPIO DI TABELLA DI VALUTAZIONE

| REQUISITO | SI | NO | NOTE |
| --- | --- | --- | --- |
| FUNZIONALITA' |
| La task viene creata correttamente | | | |
| La task può essere modificata | | | |
| La task può essere eliminata | | | |
| FRONTEND |
| Corretta implementazione dei punti presenti nella descrizione della todo app | | | |
| Corretto utilizzo di tailwind.css | | | |
| Collegamento frontend con backend | | | |
| BACKEND |
| Corretta implementazione della creazione della task | | | |
| Corretta implementazione della lettura della task | | | |
| Corretta implementazione della cancellazione della task | | | |

## CONSEGNA DEL PROGETTO

Per consegnare il progetto, creare un nuovo account su GitHub e creare un nuovo repository chiamato `todo-app-cognome` che sia pubblica. Ricordatevi di initilizzare il repository con un README.md.

Il secondo passo è quello di caricare il progetto su GitHub. Per farlo scaricare GitHub Desktop da qui: https://desktop.github.com/. Loggarti con il tuo account e selezionare add -> clone repository -> e selezionare il repository appena creato.

Dopo spostare tutti i file del progetto all'interno della cartella del repository. Infine, fare il commit e il push del progetto.