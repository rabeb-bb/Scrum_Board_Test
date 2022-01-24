import React, { useState } from "react";
import "./Task.css";

const Task = ({ ticket, index, moveItem, setDragElement, items, setItems }) => {
  const [change, setChange] = useState(false);
  const [item, setItem] = useState(ticket);
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
  // handle deleteing tasks
  const handleDelete = () => {
    console.log(items);
    const newItems = items.filter((el) => el.id !== ticket.id);
    setItems([...newItems]);
  };
  // handle Editing tasks
  const handleEdit = () => {
    setChange(true);
  };
  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    setItems(items.filter((el) => el.id !== ticket.id).concat([item]));
    setChange(false);
  };

  return (
    <div
      className="task-card"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      {change ? (
        <div>
          <form className="add-form">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="f-input"
              name="title"
              value={item.title}
              onChange={handleChange}
            />
            <label className="form-label">Due Date</label>
            <input
              type="date"
              className="f-input"
              name="due_date"
              value={item.due_date}
              pattern="\d{4}-\d{2}-\d{2}"
              onChange={handleChange}
            />
            {/* <label className="form-label">Priority</label>
        <input /> */}
            <label className="form-label">Description</label>
            <textarea
              className="f-input"
              name="description"
              value={item.description}
              onChange={handleChange}
            />
            <label className="form-label">Status</label>
            <select
              className="f-input"
              name="status"
              onChange={handleChange}
              value={item.status}
            >
              <option disabled> choose status</option>
              <option value={"TO_DO"}>TO_DO</option>
              <option value={"IN_PROGRESS"}>IN_PROGRESS</option>
              <option value={"DONE"}>DONE</option>
            </select>
            <button
              onClick={(e) => handleSave(e)}
              style={{ width: "30%", margin: "auto", marginTop: "2%" }}
            >
              Save
            </button>
          </form>
        </div>
      ) : (
        <div>
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
            <button onClick={handleEdit}>
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={handleDelete}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
