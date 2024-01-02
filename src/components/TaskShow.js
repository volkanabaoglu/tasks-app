import "../styles/taskShow.css"

function TaskShow({ task, onDelete}) {
  
  const handleDeleteClick = () => {
    onDelete(task.id)
  }

  return (
    <div className="task-show">
      <h3>Title</h3>
      <p>{task.title}</p>
      <h3>Content</h3>
      <p>{task.content}</p>
      <div>
        <button className="task-show-button-edit">Edit</button>
        <button className="task-show-button-delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default TaskShow;
