import "./App.css";
import TodoItem from "./TodoItem";

function TodoList({ taches, changerTache, deletetache }) {

    if (taches.length === 0) {
        return <p className="empty-message">Aucune tâche pour le moment</p>;
    }

    return (
        <ul>
            {taches.map((tache) => (
                <TodoItem
                    key={tache.id}
                    tache={tache}
                    changerTache={changerTache}
                    deletetache={deletetache}
                />
            ))}
        </ul>
    );
}

export default TodoList;