import { React, useState } from "react";

const AddressDataComp = (props) => {
  const [street, setStreet] = useState(props.userData.address.street);

  const [city, setCity] = useState(props.userData.address.city);

  const [zipcode, setZipcode] = useState(props.userData.address.zipcode);

  const changeStreet = (e) => {
    const street0 = e.target.value;

    setStreet(street0);

    //updateOtherData();
    props.userData.address.street = street0;
  };
  const changeCity = (e) => {
    const city0 = e.target.value;

    setCity(city0);
    //updateOtherData();
    props.userData.address.city = city0;
  };
  const changeZipcode = (e) => {
    const zipcode0 = e.target.value;

    setZipcode(zipcode0);
    //updateOtherData();
    props.userData.address.zipcode = zipcode0;
  };

  const setOtherDataFunction = props.callback;

  const updateOtherData = () => {
    //alert(street);
    //setOtherDataFunction({ street: street, city: city, zipCode: zipcode });
    props.userData.address.city = city;
    props.userData.address.street = street;
    props.userData.address.zipcode = zipcode;
  };

  return (
    <div style={{ backgroundColor: "orange" }}>
      <h3>AddressDataComp</h3>
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

export default AddressDataComp;
