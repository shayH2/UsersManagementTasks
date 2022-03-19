import { useEffect } from "react";
import { React, useState } from "react";
import AddressDataComp from "./AddressData";
import ManagemetTodosPostsComp from "./Tasks/ManagemetTodosPosts";
import "./User.css";
import Utils from "./Utils";

const UserComp = (props) => {
  const [displayAddressDataOnOver, setDisplayAddressDataOnOver] =
    useState(false);

  const [displayAddressDataOnClick, setDisplayAddressDataOnClick] =
    useState(false);

  const [
    displayTodosAndPostysDataOnClick,
    setDisplayTodosAndPostysDataOnClick,
  ] = useState(false);

  const [name, setName] = useState(props.userData.name);

  const [email, setEmail] = useState(props.userData.email);

  const [otherData, setOtherData] = useState({});

  //useEffect;

  const canDisplay = () => {
    return (
      !props.filter ||
      props.userData.name.includes(props.filter) ||
      props.userData.email.includes(props.filter)
    );
  };

  const onMouseOverData = () => {
    setDisplayAddressDataOnOver(true);
  };

  const onMouseLeaveData = () => {
    setDisplayAddressDataOnOver(false);
  };

  const toggleOtherData = () => {
    setDisplayAddressDataOnClick(!displayAddressDataOnClick);
  };

  const changeName = (e) => {
    const name0 = e.target.value;

    setName(name0);

    props.userData.name = name0;
  };

  const changeEmail = (e) => {
    const email0 = e.target.value;

    setEmail(email0);

    props.userData.email = email0;
  };

  const updateOtherData = (other) => {
    setOtherData(other);

    //props.userData.name = name;

    console.log(otherData);
  };

  const canDisplayAddressData = () =>
    displayAddressDataOnClick || displayAddressDataOnOver;

  const id = props.userData.id;

  const updateClick = async () => {
    const res = await Utils.updateUser(id, props.userData); // newUserJson);
  };

  const deleteClick = async () => {
    const res = await Utils.deleteUser(id);
  };

  const onClickId = () => {
    console.log(otherData);

    setDisplayTodosAndPostysDataOnClick(!displayTodosAndPostysDataOnClick);
  };

  let fromChild = null;

  const setFromChild = (m) => {
    fromChild = m;
  };

  useEffect(() => {
    //Do something on every names change
  }, [displayTodosAndPostysDataOnClick]);

  return (
    <div className={canDisplay() ? "user" : "invisible"}>
      <h3>User comp</h3>
      <span onClick={onClickId}>
        ID: {props.userData.id} <br />
      </span>
      Name :
      <input type="text" value={name} onChange={changeName} /> <br />
      Email : <input type="text" value={email} onChange={changeEmail} /> <br />
      <div
        className={
          displayAddressDataOnClick || displayAddressDataOnOver
            ? "visible"
            : "invisible"
        }
      >
        <AddressDataComp userData={props.userData} />
      </div>
      <div
        className={displayTodosAndPostysDataOnClick ? "visible" : "invisible"}
      >
        <ManagemetTodosPostsComp
          userData={props.userData}
          display={displayTodosAndPostysDataOnClick}
          //setChildMethod={setFromChild}
        />
      </div>
      <div className="user-buttons">
        <div>
          <input
            className={
              displayAddressDataOnClick
                ? "button-click-true"
                : displayAddressDataOnOver
                ? "button-over-true"
                : ""
            }
            type="button"
            id="otherDataId"
            onMouseOver={onMouseOverData}
            onMouseLeave={onMouseLeaveData}
            onClick={toggleOtherData}
            value="Other data"
          />
        </div>
        <div>
          <input
            type="button"
            name="updUser"
            value="Update"
            onClick={updateClick}
          />

          <input
            type="button"
            name="delUser"
            value="Delete"
            onClick={deleteClick}
          />
        </div>
      </div>
    </div>
  );
};

export default UserComp;
