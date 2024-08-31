import React, { useState, useEffect } from 'react';
import AddTask from './AddTask';
import TaskItem from './TaskItem';
import { FaPlus } from "react-icons/fa";
import './TaskManager.css';

const TaskManager = ({ itemList }) => {
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);

    // Load tasks from localStorage when itemList changes
    useEffect(() => {
        const storedTasks = localStorage.getItem(`tasks_${itemList}`);
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        } else {
            setTasks([]);
        }
    }, [itemList]);

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        if (itemList) {
            localStorage.setItem(`tasks_${itemList}`, JSON.stringify(tasks));
        }
    }, [tasks, itemList]);

    const addTask = (taskName) => {
        setTasks([...tasks, taskName]);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const handleOpenAddTask = () => {
        setShowAddTask(true);
    };

    const handleCloseAddTask = () => {
        setShowAddTask(false);
    };

    return (
        <>
            {itemList ? (
                <div>
                    <div className="new-task-button">
                        <button onClick={handleOpenAddTask}>
                            <FaPlus />
                            New Task
                        </button>
                    </div>
                    {showAddTask && (
                        <AddTask
                            onAddTask={addTask}
                            onClose={handleCloseAddTask}
                        />
                    )}
                    <TaskItem tasks={tasks} onDeleteTask={deleteTask} />
                </div>
            ) : 'Crie ou selecione uma Lista para ver suas Tasks'}
        </>
    );
};

export default TaskManager;
