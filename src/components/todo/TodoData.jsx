const TodoData = (props) => {

    const { name, todoList } = props;
    console.log(">>> check todo list: ", todoList);

    return (
        <div className="todo-data">
            {/* <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div> */}

            {JSON.stringify(todoList)}
        </div>
    );
}
export default TodoData;