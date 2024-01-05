import "../styles/taskCreate.css";
import { useState } from "react";

function TaskCreate({ onCreate, task, editState, onTimeUpdate }) {
  const [title, setTitle] = useState(editState ? task.title : "");
  const [content, setContent] = useState(editState ? task.content : "");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editState) {
      onTimeUpdate(task.id, title, content);
    } else {
      onCreate(title, content);
    }

    setTitle("");
    setContent("");
  };

  return (
    <>
      {editState ? (
        <div>
          <div className="task-form-all">
            <h3 className="app-h3">Edit Task !</h3>
            <form className="task-edit-form">
              <label>Edit Title</label>
              <input value={title} onChange={handleChangeTitle} />
              <label>Edit Content</label>
              <textarea value={content} onChange={handleChangeContent} />
              <button className="task-edit-button" onClick={handleSubmit}>
                OK
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="task-form-all">
          <h3 className="app-h3">Enter a Task !</h3>
          <form className="task-form">
            <label>Title</label>
            <input value={title} onChange={handleChangeTitle} />
            <label>Content</label>
            <textarea value={content} onChange={handleChangeContent} />
            <button className="task-create-button" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskCreate;
