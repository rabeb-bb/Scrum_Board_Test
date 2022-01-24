import React from "react";
import "./Task.css";

const Task = ({ ticket, index, moveItem, setDragElement }) => {
  //set the data when the drag starts
  const onDragStart = (e) => {
    e.dataTransfer.setData("item", JSON.stringify(ticket));
    setDragElement(ticket);
    setTimeout(() => {
      e.target.style.visibility = "hidden"; // for design purposes only
    }, 1);
  };
  //move the draggable item
  const onDragOver = (e) => {
    moveItem(e.target.innerText);
    e.preventDefault();
  };
  const onDragEnd = (e) => {
    e.target.style.visibility = "visible"; //return visibilty to the item
  };

  return (
    <div
      className="task-card"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
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
          <i className="fas fa-edit"></i>
        </button>
        <button>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
