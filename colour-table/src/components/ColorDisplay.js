import React, { useState } from "react";
// import styles from "ColorDisplaymodule.css";

// let start = Date.now();
const ColorDisplay = (props) => {
  // const [isActive, setIsActive] = useState(false);
  const colorTable = {
    Red: "255, 0, 0, ",
    Blue: "0, 0, 255, ",
    Orange: "255, 165, 0, ",
    Black: "0, 0, 0, ",
    Green: "0, 128, 0, ",
  };

  // const stateChangeHandler = (timeVal) => {
  //   // let elapsedTimeNow = new Date();
  //   // elapsedTimeNow.setMilliseconds(123);
  //   elapsedTimeNow.setMilliseconds(elapsedTimeNow.getMilliseconds() + timeVal);
  //   console.log(elapsedTimeNow.getTime());
  //   while (elapsedTimeNow - start > 0) {
  //     setIsActive(true);
  //     elapsedTimeNow--;
  //   }
  //   setIsActive(false);
  // };

  return props.items.map((item) => {
    let color = item.color;
    let shade = item.shade;
    let back = colorTable[color] + shade;
    let result = back.replace('"', "");
    // key = item.id;
    return (
      <tr
        key={item.id}
        // style={{ background: isActive ? `rgba(${result})` : "white" }}
        style={{ background: `rgba(${result})` }}
        // onload="alert('Hello, World!');"

        // onChange={() => stateChangeHandler(item.timeVal)}
        // style={{ background: `${rgba(colorTable[color] + shade)};` }}
      >
        {/* <tr key={item.id} style={{ background: "rgba(255, 0, 255, 0.3);" }}> */}
        <td></td>
        <td>{item.timeVal}</td>
        <td>{item.color}</td>
        <td>{item.shade}</td>
      </tr>
    );
  });
};

export default ColorDisplay;
