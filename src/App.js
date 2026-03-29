import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {

  const [taches, setTaches] = useState([]);

  const addTache = (text) => {
    const newTache = {
      id: Date.now(),
      text,
      finish: false
    };

    setTaches(prev => [...prev, newTache]);
  };

  const changeState = (id) => {
    setTaches(prev =>
      prev.map(t =>
        t.id === id ? { ...t, finish: !t.finish } : t
      )
    );
  };

  const deleteTache = (id) => {
    setTaches(prev =>
      prev.filter(t => t.id !== id)
    );
  };

  return (
    <div>
      <h1>To-Do List Interactive</h1>

      <TodoForm addTache={addTache} />

      <TodoList
        taches={taches}
        changerTache={changeState}
        deletetache={deleteTache}
      />
    </div>
  );
}

export default App;