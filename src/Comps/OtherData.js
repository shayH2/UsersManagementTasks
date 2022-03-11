import { React, useState } from "react";

const OtherDataComp = (props) => {
  const [street, setStreet] = useState(props.userData.address.street);

  const [city, setCity] = useState(props.userData.address.city);

  const [zipcode, setZipcode] = useState(props.userData.address.zipcode);

  const changeStreet = (e) => {
    //alert(JSON.stringify(e.target));
    //alert(e.target.value);
    setStreet(e.target.value);
    updateOtherData();
  };
  const changeCity = (e) => {
    setCity(e.target.value);
    updateOtherData();
  };
  const changeZipcode = (e) => {
    setZipcode(e.target.value);
    updateOtherData();
  };

  const setOtherDataFunction = props.callback;

  const updateOtherData = () => {
    //alert(street);
    setOtherDataFunction({ street: street, city: city, zipCode: zipcode });
  };

  return (
    <div style={{ backgroundColor: "orange" }}>
      <h3>OtherDataComp</h3>
      Street: <input type="text" value={street} onChange={changeStreet} />
      <br />
      City : <input type="text" value={city} onChange={changeCity} /> <br />
      Zip code : <input
        type="text"
        value={zipcode}
        onChange={changeZipcode}
      />{" "}
      <br />
    </div>
  );
};

export default OtherDataComp;
