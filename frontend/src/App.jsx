import React, { useState, useEffect } from 'react';
import axios from 'axios'

const TodoApp = () => {
    // TODO: Inizializza lo state per i todo e il valore dell'input
    // const [todos, setTodos] = useState([]);
    // const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        // TODO: Implementa la funzione per recuperare i todos dal backend
        // 1. Usa axios per fare una richiesta GET all'endpoint appropriato
        // 2. Aggiorna lo state 'todos' con i dati ricevuti
        // 3. Gestisci eventuali errori

        // Esempio di implementazione:
        // try {
        //     const response = await axios.get('/api/todos');
        //     setTodos(response.data);
        // } catch (error) {
        //     console.error('Errore nel recupero dei todos:', error);
        // }
    };

    const handleInputChange = (e) => {
        // TODO: Aggiorna lo state del valore dell'input
    };

    const handleAddTodo = () => {
        // TODO: Implementa l'aggiunta di un nuovo todo
        // Suggerimento 1: Controlla se inputValue non è vuoto, poi aggiungi il nuovo todo alla lista
        // Suggerimento 2: un elemento della lista todos deve essere un oggetto con i seguenti campi: es. {attivita: "studiare react"}
        

    };

    const handleDeleteTodo = (id) => {
        // TODO: Implementa la cancellazione di un todo
        // Suggerimento: Usa la funzione filter per rimuovere il todo con l'id corrispondente
    };

    return (
        <div className='flex flex-col p-10'>
            <p className='text-3xl font-bold'>
                TodoApp
            </p>
            <div className='flex flex-row mt-5 items-center gap-3'>
                <input
                    className='border border-black rounded-xl w-full p-3'
                    type="text"
                    // value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Aggiungi un nuovo todo"
                />
                <button className="bg-black text-white rounded-xl p-3 hover:bg-gray-400" onClick={handleAddTodo}>Aggiungi</button>
            </div>
            <ul>
                {/* TODO: Usa map per iterare sui todos e renderizzarli come elementi della lista */}
                {/* Esempio di struttura:
                {todos.map((todo) => (
                  <li key={todo.id}>
                    <span>
                      {todo.text}
                    </span>
                    <button onClick={() => handleDeleteTodo(todo.id)}>Elimina</button>
                  </li>
                ))}
                */}
            </ul>
        </div>
    );
};

export default TodoApp;