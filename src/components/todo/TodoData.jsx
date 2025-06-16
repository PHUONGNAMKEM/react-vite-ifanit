import "./todo.css"
const TodoData = (props) => {

    const { todoList } = props;
    console.log(">>> check todo list: ", todoList);

    return (
        <div className="todo-data">

            {todoList.map((todo) => {
                return (
                    <div className="todo-item">
                        <div>{todo.id} - {todo.name}</div>
                        <button style={{ background: "red" }}>Delete</button>
                    </div>

                )
            })}

            {JSON.stringify(todoList)}
        </div>
    );
}
export default TodoData;