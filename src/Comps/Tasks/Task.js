import { useEffect } from "react";
import { React, useState } from "react";

const TaskComp = (props) => {
  const userTask = () => {};

  return (
    <div>
      <h3>Task comp</h3>
      <span>
        Title: {props.userTask.title} <br />
      </span>
      Completed :
      <input type="text" value={props.userTask.completed} /> <br />
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
