import React, { useState } from 'react'
import "./AddTask.css"
import { IoClose } from "react-icons/io5";


const AddTask = ({ onAddTask, onClose }) => {

    const [newTask, setNewTask] = useState("")

 

    const handleAddNewTask = (e) => {
        e.preventDefault()
        if (newTask.trim()) {
            onAddTask(newTask);
            setNewTask("");
            onClose();
        }
    }

    return (
        <>
            <div className="add-task-container">
                <div className="close-button" onClick={onClose}>
                    <button>
                        <IoClose />
                    </button>
                </div>
                <form action="" onSubmit={handleAddNewTask}>
                    <div className="form-control">
                        <label>Add New Task</label>
                        <input type="text" placeholder='Write a task name' onChange={(e) => setNewTask(e.target.value)} value={newTask} />
                    </div>
                    <input type="submit" value={"Add"} />
                </form>
            </div>

        </>
    )
}

export default AddTask