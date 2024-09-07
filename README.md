# Specifica dei requisiti TO DO APP
### Descrizione applicazione TO DO:
- Un campo di input testuale per permettere all'utente di inserire nuove attività
- Un bottone "Aggiungi" per salvare la nuova attività inserita
- Una lista che mostra tutte le attività inserite
- La possibilità di marcare le attività come completate
- Un'opzione per eliminare le singole attività
## FRONTEND
- Implementare tutti i punti presenti nella descrizione dell’applicazione.
- Scrivere codice sul file App.jsx (todoapp-jesap->scr->App.jsx).
#### Consigli
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
Utilizzare il file database.json per salvare le attività come:

```json
//esempio: database.json

{
  "lista_attivita": [
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
}
```

Leggi questo: https://hackernoon.com/how-to-read-and-write-json-files-in-python

## CRITERI DI VALUTAZIONE






Sarà fornito del codice precompilato sia per Frontend e Backend.
