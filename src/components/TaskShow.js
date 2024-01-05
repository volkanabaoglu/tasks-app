import "../styles/taskShow.css";
import { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskShow({ task, onDelete , onUpdate}) {
  const [editState, setEditState] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setEditState(true);
  };

  const handleSubmit = (id,newTitle,newContent) => {
    setEditState(false);
    onUpdate(id,newTitle,newContent);
  };

  
  return (
    <>
      {editState ? (
        <div>
          <TaskCreate task={task} editState={editState} onTimeUpdate={handleSubmit}/>
        </div>
      ) : (
        <div className="task-show">
          <h3>Title</h3>
          <p>{task.title}</p>
          <h3>Content</h3>
          <p>{task.content}</p>
          <div>
            <button className="task-show-button-edit" onClick={handleEditClick}>
              Edit
            </button>
            <button
              className="task-show-button-delete"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskShow;
