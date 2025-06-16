import "./todo.css"
const TodoData = (props) => {

    const { todoList } = props;
    return (
        <div className="todo-data">

            {todoList.map((todo) => {
                return (
                    <div className="todo-item" key={todo.id}>
                        <div>{todo.id} - {todo.name}</div>
                        <button style={{ background: "red" }}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}
export default TodoData;