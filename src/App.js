import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy butter" },
    { id: 3, completed: false, title: "Buy milk" },
  ])

  function toggleTodo(id) {
    console.log(id);
    setTodos(
       todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    );
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <Context.Provider value={{ removeTodo, toggleTodo}}>
    <div className="wrapper">
      <h1> React TODO</h1>
      <TodoList todos={todos}></TodoList>
    </div>
    </Context.Provider>
  );
}

export default App;
