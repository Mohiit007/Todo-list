import React, { useState } from "react"

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function handleAddTask() {
        if (document.getElementById("new-task").value !== "") {
            setTasks(t => [...t, newTask])
            document.getElementById("new-task").value = ""
        }

    }

    function handleDeleteTaks(index) {
        const updatedtasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedtasks)
    }


    return (
        <div className="todo-list-container">
            <h2>Todo List</h2>
            <div className="task-input">
                <input type="text" id="new-task" onChange={handleInputChange} />
                <button className="add-btn" onClick={handleAddTask}>+</button>
            </div>
            <ol className="list">
                {tasks.map((task, index) =>
                    <li key={index} value={task}>
                        <span>{task}</span>
                        <button className="del-btn" onClick={() => handleDeleteTaks(index)}>🗑</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TodoList