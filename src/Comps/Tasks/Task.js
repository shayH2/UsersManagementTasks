import { useEffect } from "react";
import { React, useState } from "react";

const TaskComp = (props) => {
  const userTask = () => {};

  const markCompleted = () => 0;

  return (
    <div>
      <h3>Task comp</h3>
      <span>
        <b>Title:</b> {props.userTask.title} <br />
      </span>
      <b>Completed</b>&nbsp;
      <input type="checkbox" value={props.userTask.completed} /> <br />
      <div className="user-buttons">
        <div>
          <input
            type="button"
            id="markCompleted"
            onClick={markCompleted}
            Value="mark Completed"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskComp;
