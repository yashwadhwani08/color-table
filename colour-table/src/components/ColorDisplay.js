import React from "react";
// import styles from "ColorDisplaymodule.css";

const ColorDisplay = (props) => {
  // try {
  //   let x = document.getElementsByClassName("column")[1].offsetHeight;
  //   if (x >= 948) props.divHeight(x);
  //   else props.divHeight(948);
  // } catch (e) {}

  const colorTable = {
    Red: "255, 0, 0, ",
    Blue: "0, 0, 255, ",
    Orange: "255, 165, 0, ",
    Purple: "160, 32, 240, ",
    Green: "0, 128, 0, ",
    Yellow: "255, 255, 0, ",
  };

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
              : "white",
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
