# Specifica dei requisiti TO DO APP

## TABLE OF CONTENTS
- [Specifica dei requisiti TO DO APP](#specifica-dei-requisiti-to-do-app)
  - [TABLE OF CONTENTS](#table-of-contents)
    - [Descrizione della TODO APP:](#descrizione-della-todo-app)
  - [FRONTEND](#frontend)
      - [CONSIGLI](#consigli)
  - [BACKEND](#backend)
  - [DATABASE](#database)
  - [ISTRUZIONI](#istruzioni)
    - [FRONTEND](#frontend-1)
    - [BACKEND](#backend-1)
  - [CRITERI DI VALUTAZIONE](#criteri-di-valutazione)
    - [FRONTEND](#frontend-2)
    - [BACKEND](#backend-2)

### Descrizione della TODO APP:

- Un campo di input testuale per permettere all'utente di inserire nuove attività
- Un bottone "Aggiungi" per salvare la nuova attività inserita
- Una lista che mostra tutte le attività inserite
- La possibilità di marcare le attività come completate
- Un'opzione per eliminare le singole attività

## FRONTEND

- Implementare tutti i punti presenti nella descrizione dell’applicazione.
- Scrivere codice sul file App.jsx (todoapp-jesap->scr->App.jsx).

#### CONSIGLI

Per la strutturazione del layout della pagina, utilizzare flexbox. https://css-tricks.com/snippets/css/a-guide-to-flexbox/

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

### FRONTEND

### BACKEND

## CRITERI DI VALUTAZIONE

### FRONTEND

### BACKEND

I criteri di valutazione del backend sono principalmente due:
- Correttezza del metodo HTTP utilizzato per i vari endpoint;
- Correttezza nella risposta che l'endpoint ritorna.
