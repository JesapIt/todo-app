import React, { useState } from 'react';

const TodoApp = () => {
    // TODO: Inizializza lo state per i todo e il valore dell'input
    // const [todos, setTodos] = useState([]);
    // const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // TODO: Aggiorna lo state del valore dell'input
    };

    const handleAddTodo = () => {
        // TODO: Implementa l'aggiunta di un nuovo todo
        // Suggerimento: Controlla se inputValue non è vuoto, poi aggiungi il nuovo todo alla lista
    };

    const handleToggleTodo = (id) => {
        // TODO: Implementa il cambio di stato "completato" di un todo
        // Suggerimento: Usa map sui todos e inverti lo stato "completato" del todo corrispondente
    };

    const handleDeleteTodo = (id) => {
        // TODO: Implementa la cancellazione di un todo
        // Suggerimento: Usa filter per rimuovere il todo con l'id corrispondente
    };

    return (
        <div className='flex flex-col p-10'>
            <p className='text-3xl font-bold'>
                TodoApp
            </p>
            <div className='flex flex-col mt-5'>
                <input
                    className='border border-black'
                    type="text"
                    //value={} /* TODO: Aggiungi il valore dell'input */
                    onChange={handleInputChange}
                    placeholder="Aggiungi un nuovo todo"
                />
                <button className="bg-black text-white rounded-2xl p-3 hover:bg-gray-400 mt-5" onClick={handleAddTodo}>Aggiungi</button>
            </div>
            <ul>
                {/* TODO: Usa map per iterare sui todos e renderizzarli come elementi della lista */}
                {/* Esempio di struttura:
                {todos.map((todo) => (
                  <li key={todo.id}>
                    <span onClick={() => handleToggleTodo(todo.id)}>
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