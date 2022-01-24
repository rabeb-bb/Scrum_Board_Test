import React, { useState } from "react";
import "./AddItem.css";
const AddItem = ({ items, setItems, setShow }) => {
  //   console.log(items);
  const [task, setTask] = useState();
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    setItems([...items, task]);
    e.preventDefault();
    setShow(false);
  };
  return (
    <div className="add-card">
      <h4>Add New Task</h4>
      <form className="task-card add-form">
        <div>
          <div className="input-box">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="f-input"
              placeholder="enter task title..."
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label className="form-label">Due Date</label>
            <input
              type="date"
              className="f-input"
              name="due_date"
              pattern="\d{4}-\d{2}-\d{2}"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="input-box">
            <label className="form-label">Description</label>
            <textarea
              className="f-input"
              placeholder="enter task description..."
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label className="form-label">Status</label>
            <select className="f-input" name="status" onChange={handleChange}>
              <option disabled> choose status</option>
              <option value={"TO_DO"}>TO_DO</option>
              <option value={"IN_PROGRESS"}>IN_PROGRESS</option>
              <option value={"DONE"}>DONE</option>
            </select>
          </div>
        </div>
        <button
          onClick={(e) => handleAdd(e)}
          style={{ width: "30%", margin: "auto", marginTop: "2%" }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
