import { useEffect } from "react";
import { React, useState } from "react";
import Utils from "../Utils";
import TaskComp from "./Task";

const ManagemetTodosPostsComp = (props) => {
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    if (true) {
      //props.display) {
      const todos0 = await Utils.getTodos(props.userData.id);

      setTodos(todos0.data);

      //const posts0 = await Utils.getPosts(props.userData.id);

      //setPosts(posts0);
    }
  }, []);

  return (
    <div>
      <h3>ManagemetTodosPosts comp</h3>
      {todos.map((item, index) => {
        return <TaskComp key={index} userTask={item} />;
      })}

      {posts.map((item, index) => {
        return <TaskComp key={index} userTask={item} />;
      })}
    </div>
  );
};

export default ManagemetTodosPostsComp;
