import "./components/todo/todo.css"
import reactLogo from "./assets/react.svg"
import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"

const App = () => {

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
      />
      <div className="todo-image">
        <img src={reactLogo} alt="" className="logo" />
      </div>

    </div>
  )
}

export default App
