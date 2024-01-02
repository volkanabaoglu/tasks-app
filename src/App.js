import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([]);
  const createTask=(title,content)=>{
    const createdTask = {id:Math.round(Math.random()*999999),title,content};
    setTasks([...tasks, createdTask]);
  }

  const deleteTaskById = (id)=>{
    const updatedTasks = [...tasks];
    const deletedToItem = updatedTasks.findIndex(t=>t.id === id);
    updatedTasks.splice(deletedToItem,1);
    setTasks(updatedTasks);
  }


  return <div className="App">
    <TaskCreate onCreate={createTask}/>

    <h1>TASKS</h1>

    <TaskList tasks={tasks} onDelete={deleteTaskById}/>
  </div>;
}

export default App;
