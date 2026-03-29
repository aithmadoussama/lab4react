import { useState } from "react";
import "./App.css";

function TodoForm({ addTache }) {

    const [text, setText] = useState("");

    function submitFormulaire(event) {
        event.preventDefault();
        if (text.trim() === '') return;
        addTache(text);
        setText('');
    }

    function handleChangeText(event) {
        setText(event.target.value);
    }

    return (
        <div>
            <form onSubmit={submitFormulaire}>
                <input
                    type="text"
                    value={text}
                    onChange={handleChangeText}
                    placeholder="Description de la tâche"
                    required
                />

                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default TodoForm;