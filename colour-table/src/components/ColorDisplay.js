import React from "react";
// import styles from "ColorDisplaymodule.css";

// let start = Date.now();
const ColorDisplay = (props) => {
  const colorTable = {
    Red: "255, 0, 0, ",
    Blue: "0, 0, 255, ",
    Orange: "255, 165, 0, ",
    Purple: "160, 32, 240, ",
    Green: "0, 128, 0, ",
    Yellow: "255, 255, 0, ",
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

    return (
      <tr
        key={item.id}
        style={{
          background:
            props.active && props.active.id === item.id
              ? `rgba(${result})`
              : // ? // ? `rgba(${result})`
                // `rgba(${("0,0,0,0".replace('"'), "")})`
                "white",
        }}
      >
        <td>{props.active && props.active.id === item.id && "=>"}</td>
        <td>{item.time}</td>
        <td>{item.color}</td>
        <td>{item.shade}</td>
      </tr>
    );
  });
};

export default ColorDisplay;
