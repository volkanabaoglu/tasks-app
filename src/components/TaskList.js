import TaskShow from "./TaskShow";

function TaskList({tasks}) {
    console.log(tasks)
    if (tasks.length === 0) {
        return <div>No tasks to display</div>};
    

    return ( <div>
        <div>
            {tasks.map((task)=>{
                return(
                    <TaskShow key={task.id} task={task}/>
                )
            })}
        </div>
    </div> );
}

export default TaskList;