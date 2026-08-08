import React, { useState } from "react"

function TaskManagement() {
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function taskInput(event) {
        
        setNewTask(event.target.value);
    }

    function addTask() {
        
        if (newTask.trim() != "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        setTasks(tasks.filter((task, i) => i != index));
    }

    return (
        <div className="task-management">
            <h1>Tasks</h1>

            <div>
                <input type="text" placeholder="Enter a task" value={newTask} onChange={taskInput}/>
                <button className="add-task-button" onClick={addTask}>Add Task</button>
            </div>

            <ol className="task-list">
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span>{task}</span>
                        <button className="delete-task-button" onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default TaskManagement