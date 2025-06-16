import "./components/todo/todo.css"
import reactLogo from "./assets/react.svg"
import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"
import { useState } from "react"

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" }
  ]);

  const ifanit = 'iFanIT';
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={ifanit}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} alt="" className="logo" />
      </div>

    </div>
  )
}

export default App
