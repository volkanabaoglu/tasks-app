import "../styles/taskCreate.css"
function TaskCreate() {
    return ( <div className="task-form-all">
        <h3>Enter a Task !</h3>
        <form className="task-form">
            <label>Title</label>
            <input type="text" />
            <label>Content</label>
            <textarea />
            <button>Create</button>
        </form>
    </div> );
}

export default TaskCreate;