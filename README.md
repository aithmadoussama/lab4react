TP 4 : Projet de synthèse React – To-Do List interactive ou Blog simple

Ce projet est une application **React.js** simple permettant de gérer une liste de tâches (To-Do List) avec des fonctionnalités interactives.

---

## Fonctionnalités

- Ajouter une tâche  
-  Marquer une tâche comme terminée  
-  Supprimer une tâche  
-  Affichage dynamique des tâches  
-  Interface simple et intuitive  

---

## Structure du projet
```
src/
│
├── App.js # Composant principal
├── App.css # Styles globaux
├── index.js # Point d'entrée
├── index.css # Styles de base
│
├── TodoForm.js # Formulaire d'ajout
├── TodoList.js # Liste des tâches
├── TodoItem.js # Une tâche individuelle
│
├── App.test.js # Test de base
├── reportWebVitals.js # Performance
└── setupTests.js # Configuration des tests
```

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/votre-utilisateur/react-todo-app.git
cd react-todo-app
```
## Fonctionnement
 - Ajouter une tâche
   ```
   addTache(text);
   ```
 - Changer le statut
   ```
     const changeState = (id) => {
      setTaches(prev =>
          prev.map(t =>
            t.id === id ? { ...t, finish: !t.finish } : t
          )
        );
      };
   ```
   - Supprimer une tache
     ```
     const deleteTache = (id) => {
        setTaches(prev => prev.filter(t => t.id !== id));
     };
     
     ```
  ## Captures d'ecran 
  

