import React from "react";
import "./Task.css";

const Task = ({ ticket, index }) => {
  return (
    <div className="task-card">
      {/* task header */}
      <div className="task-header">
        <h4>{ticket.title}</h4>
        <span>{index}</span>
      </div>
      {/* task description */}
      <div className="task-description">
        <p>{ticket.description}</p>
      </div>
      {/* task management */}
      <div className="edit-task">
        <button>
          <i class="fas fa-edit"></i>
        </button>
        <button>
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
