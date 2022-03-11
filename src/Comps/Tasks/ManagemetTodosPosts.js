import { useEffect } from "react";
import { React, useState } from "react";
import Utils from "../Utils";

const ManagemetTodosPostsComp = (props) => {
  const [tasks, setTasks] = useState([]);
  const [posts, setPosts] = useState([]);

  const tasks0 = Utils.getTodos(props.userData.id);

  setTasks(tasks0);

  setPosts(posts0);

  const posts0 = Utils.getPosts(props.userData.id);

  return (
    <div>
      <h3>ManagemetTodosPosts comp</h3>
      {JSON.stringify(tasks)}
      {JSON.stringify(posts)}
    </div>
  );
};

export default ManagemetTodosPostsComp;
