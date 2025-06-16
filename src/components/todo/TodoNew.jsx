import { useState } from "react";

const TodoNew = (props) => {

  const [valueInput, setValueInput] = useState("iFanIT");

  const { addNewTodo } = props;


  const handleClick = () => {
    alert(`Click me: ${valueInput}`);
  }

  const handleOnChange = (event) => {
    setValueInput(event)
  }


  return (
    <div className="todo-new">
      <input type="text" placeholder="Enter your task" onChange={(e) => handleOnChange(e.target.value)} />
      <button
        style={{ cursor: "pointer", }}
        onClick={handleClick}
      >Add</button>

      <div>My text input is = {valueInput}</div>


    </div>
  );
}

export default TodoNew; 