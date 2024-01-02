import TaskShow from "./TaskShow";
import "../styles/taskList.css"
function TaskList({tasks , onDelete}) {
    console.log(tasks)
    if (tasks.length === 0) {
        return <div>No tasks to display</div>};
    

    return ( <div>
        <div className="task-list">
            {tasks.map((task)=>{
                return(
                    <TaskShow key={task.id} task={task} onDelete={onDelete}/>
                )
            })}
        </div>
    </div> );
}

export default TaskList;