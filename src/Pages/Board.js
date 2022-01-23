import React from "react";
import Task from "../Components/Task/Task";
import "./Board.css";
import tasks from "../data";

const Board = () => {
  return (
    <div>
      {/* add task section */}
      <div>
        <button>
          <i class="fas fa-plus-circle"></i>
        </button>
      </div>
      {/* the scrum board section */}
      <div className="grid-container">
        <div className="task_stage">
          <h3>TO DO</h3>
          <div className="organized-tasks">
            {tasks.map(
              (el, i) => el.status === "TO_DO" && <Task ticket={el} index={i} />
            )}
          </div>
        </div>
        <div className="task_stage">
          <h3>IN PROGRESS</h3>
          <div className="organized-tasks">
            {tasks.map(
              (el, i) =>
                el.status === "IN_PROGRESS" && <Task ticket={el} index={i} />
            )}
          </div>
        </div>
        <div className="task_stage">
          <h3>DONE</h3>
          <div className="organized-tasks">
            {tasks.map(
              (el, i) => el.status === "DONE" && <Task ticket={el} index={i} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
