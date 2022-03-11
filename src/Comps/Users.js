import utils from "./Utils";
import { useEffect, useReducer, useState } from "react";
import UserComp from "./User";
import axios from "axios";

function UsersComp() {
  //const [id, setId] = useState(0);
  const [users, setUsers] = useState([]);
  const [todosTitles, setTodosTitles] = useState([]);
  const [postsTitles, setPostsTitles] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(async () => {
    let resp = await utils.getUsers();
    let users10 = resp.data.slice(0, 10);

    setUsers(users10);
    console.table(resp.data);

    resp = await utils.getTodos();
    setTodosTitles(resp.data);

    resp = await utils.getPosts();
    setPostsTitles(resp.data);
  }, []);

  //if (Array.isArray(resp.data))
  //arr = resp.data.slice(0, num).map((p) => p.title);

  const searchUserByNameOrMail = (e) => {
    const val = e.target.value;

    setFilter(val);
    //setUsers(users.slice(0, 3));
  };

  return (
    <div id="users" className="App">
      <h1>Users</h1>
      Search:
      <input type="text" name="search" onChange={searchUserByNameOrMail} />
      {users.map((item, index) => {
        return <UserComp key={index} userData={item} filter={filter} />;
      })}
    </div>
  );
}

export default UsersComp;
