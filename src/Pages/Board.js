import React, { useState } from "react";
import Task from "../Components/Task/Task";
import "./Board.css";
import tasks from "../data";
import DropContainer from "../Components/drop/DropContainer";

const Board = () => {
  const statusTab = ["TO_DO", "IN_PROGRESS", "DONE"];
  const [items, setItems] = useState(tasks);
  const [dragEl, setDragEl] = useState(null);
  const onDrop = (item, status) => {
    if (item.status === status) {
      return;
    }
    //to find the new status when changed
    setItems((prevState) => {
      const newItems = prevState
        .filter((el) => el.id === item.id)
        .concat({ ...item, status: status });
      return [...newItems];
    });
  };
  const moveItem = (el) => {
    setItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (i) => i.description === dragEl.description
      );
      const hoverIndex = prevState.findIndex((i) => i.description === el);
      const newState = [...prevState];
      //takeout the item
      newState.splice(itemIndex, 1);
      //   reinserted where it's hovering over
      newState.splice(hoverIndex, 0, dragEl);
      return [...newState];
    });
  };
  const setDragElement = (el) => setDragEl(el);

  return (
    <div>
      {/* add task section */}
      <div>
        <button>
          <i className="fas fa-plus-circle"></i>
        </button>
      </div>
      {/* the scrum board section */}
      <div className="grid-container">
        {statusTab.map((status, i) => (
          <DropContainer onDrop={onDrop} status={status}>
            <div className="task_stage" key={i}>
              <h3>{status}</h3>
              <div className="organized-tasks">
                {items
                  .filter((el) => el.status === status)
                  .map((el, i) => (
                    <Task
                      ticket={el}
                      index={i < 10 ? "0" + (i + 1) : i + 1}
                      key={el.id}
                      setDragElement={setDragElement}
                      moveItem={moveItem}
                    />
                  ))}
              </div>
            </div>
            ;
          </DropContainer>
        ))}
      </div>
    </div>
  );
};

export default Board;
