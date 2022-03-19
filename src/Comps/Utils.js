import axios from "axios";

const getUsers = () => {
  return axios.get("http://jsonplaceholder.typicode.com/users");
};

const getPosts = (id) => {
  return axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`);
};

const getTodos = (id) => {
  return axios.get(`http://jsonplaceholder.typicode.com/users/${id}/todos`);
};

const putUser = () => {
  return axios.put();
};

const updateUser = (id, obj) => {
  let res = axios.put("http://jsonplaceholder.typicode.com/users/" + id, obj);

  return res;
};

const deleteUser = (id) => {
  let res = axios.delete("http://jsonplaceholder.typicode.com/users/" + id);

  return res;
};

export default { getUsers, getPosts, getTodos, updateUser, deleteUser };
