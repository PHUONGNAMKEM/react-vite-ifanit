const TodoNew = (props) => {

  const { addNewTodo } = props;

  // addNewTodo("iFanIT");
  const handleClick = (content) => {
    alert(`Click me: ${content}`);
  }

  let content = "";
  const handleOnChange = (event) => {
    // alert(`Click me: ${event}`);
    console.log(">>> on change  ", event)
  }


  return (
    <div className="todo-new">
      <input type="text" placeholder="Enter your task" onChange={(e) => handleOnChange(e.target.value)} />
      <button
        style={{ cursor: "pointer", }}
        onClick={handleClick}
      >Add</button>
    </div>
  );
}

export default TodoNew; 