import React from "react";

function MyInfo() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {};

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "red";
  } else if (12 >= hours && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "purple";
  } else {
    timeOfDay = "night";
    styles.color = "green";
  }

  return (
    <div className="myinfo">
      <h1 style={styles}>hello i'm Aunort and it's {`${timeOfDay}`}</h1>
    </div>
  );
}

export default MyInfo;
