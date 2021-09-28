import React from "react";

export default function (props) {
  return (
    <div className="contactCard">
      <img src={props.contact.imgUrl} alt="cat" />
      <h3>{props.contact.name}</h3>
      <p>{props.contact.phone}</p>
    </div>
  );
}
