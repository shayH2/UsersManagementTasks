import { useEffect } from "react";
import { React, useState } from "react";
import OtherDataComp from "./AddressData";
import ManagemetTodosPostsComp from "./Tasks/ManagemetTodosPosts";
import "./User.css";
import Utils from "./Utils";

const UserComp = (props) => {
  const [displayOtherDataOnOver, setDisplayOtherDataOnOver] = useState(false);

  const [displayOtherDataOnClick, setDisplayOtherDataOnClick] = useState(false);

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
    setDisplayOtherDataOnOver(true);
  };

  const onMouseLeaveData = () => {
    setDisplayOtherDataOnOver(false);
  };

  const toggleOtherData = () => {
    setDisplayOtherDataOnClick(!displayOtherDataOnClick);
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

  const canDisplayOtherData = () =>
    displayOtherDataOnClick || displayOtherDataOnOver;

  const id = props.userData.id;

  const updateClick = async () => {
    const res = await Utils.updateUser(id, props.userData); // newUserJson);
  };

  const deleteClick = async () => {
    const res = await Utils.deleteUser(id);
  };

  const onClickId = () => {
    alert("dsdsvdsv");
    console.log(otherData);
  };

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
          displayOtherDataOnClick || displayOtherDataOnOver
            ? "visible"
            : "invisible"
        }
      >
        <OtherDataComp userData={props.userData} />
        <ManagemetTodosPostsComp userData={props.userData} />
      </div>
      <div className="user-buttons">
        <div>
          <input
            className={
              displayOtherDataOnClick
                ? "button-click-true"
                : displayOtherDataOnOver
                ? "button-over-true"
                : ""
            }
            type="button"
            id="otherDataId"
            onMouseOver={onMouseOverData}
            onMouseLeave={onMouseLeaveData}
            onClick={toggleOtherData}
            Value="Other data"
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
