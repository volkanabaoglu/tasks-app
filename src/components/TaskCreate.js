import "../styles/taskCreate.css"
import { useState } from "react";


function TaskCreate({onCreate}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChangeTitle = (e) =>{
        setTitle(e.target.value);
    }

    const handleChangeContent  = (e) =>{
        setContent(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onCreate(title,content);
        setTitle("");
        setContent("");
    }

    return ( <div className="task-form-all">
        <h3>Enter a Task !</h3>
        <form className="task-form">
            <label>Title</label>
            <input value={title} onChange={handleChangeTitle}/>
            <label>Content</label>
            <textarea value={content} onChange={handleChangeContent} />
            <button onClick={handleSubmit} >Create</button>
        </form>
    </div> );
}

export default TaskCreate;