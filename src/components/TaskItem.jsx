import './TaskItem.css';
import { FaTrash } from "react-icons/fa";

const TaskItem = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-item-container">
      <div className="tasks">
        <div className="task">
          <ul>
            {tasks && tasks.length > 0 ? (
              tasks.map((task, index) => (
                <li key={index}>
                  <div className="form-control">
                    <input type="checkbox" id={`task-${index}`} />
                    <label htmlFor={`task-${index}`}>{task}</label>
                  </div>
                  <div className="delete-button" onClick={() => onDeleteTask(index)}>
                    <FaTrash />
                  </div>
                </li>
              ))
            ) : "Crie suas Tasks!"}
          </ul>
        </div>
      </div>
    </div>
  )
};


export default TaskItem;
