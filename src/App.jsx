import "./components/todo/todo.css"
import reactlogo from "./assets/react.svg"
import TodoNew from "./components/todo/TodoNew"
import TodoData from "./components/todo/TodoData"
  
const App = ()  => {
  
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew></TodoNew>

      <div className="todo-image">
        <img src={reactlogo} alt="" className="logo"/>
      </div>
      
      <TodoData></TodoData>
     
    </div>
  )
}

export default App
