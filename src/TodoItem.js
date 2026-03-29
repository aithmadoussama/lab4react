import "./App.css";

function TodoItem({ tache, changerTache, deletetache }) {
    return (
        <li className={tache.finish ? "finished" : ""}>
            <input
                type="checkbox"
                checked={tache.finish}
                onChange={() => changerTache(tache.id)}
            />

            <span>{tache.text}</span>

            <button onClick={() => deletetache(tache.id)}>
                Supprimer
            </button>
        </li>
    );
}

export default TodoItem;