import React, { useRef, useState } from "react";
import ColorDisplay from "./components/ColorDisplay";
// import Card from "./components/UI/Card";

import "./App.css";

function App() {
  const numberVal = useRef();
  const boxValue = useRef();

  const [play, setPlay] = useState(true);
  const [colorNow, setColorNow] = useState();
  const [colorPast, setColorPast] = useState();
  const [colorChange, setColorChange] = useState();
  const [activatedRow, setActivatedRow] = useState();
  const colors = ["Red", "Blue", "Orange", "Black", "Green"];
  const [rows, setRows] = useState([]);
  const addClickHandler = (props) => {
    let numberOfRows = numberVal.current.value;
    let arr = [];
    for (let i = 0; i < numberOfRows; i++) {
      arr.push({
        id: "e" + i + Math.random().toString,
        timeVal: Math.floor(Math.random() * (2500 + 1 - 100) + 100),
        color: colors[Math.floor(Math.random() * colors.length)],
        shade: Math.random().toFixed(1),
      });
    }
    setRows(arr);
  };

  const playClickHandler = (event) => {
    let sum = 0;
    let n;
    let arr = [];

    if (play) {
      let start = new Date();
      console.log(start.getTime());
      for (let i = 0; i < rows.length; i++) {
        n = start.getTime() + rows[i].timeVal;
        console.log(n);
        // sum += rows[i].timeVal;

        setColorNow((prevState) => rows[i].color);

        // document.body.style.background = `${rows[i].color}`;
        // boxValue.current.style.background = `${rows[i].color}`;
        while (start <= n) {
          console.log(rows[i].color, start, n);
          if (activatedRow !== rows[i])
            // document.body.style.background = `${rows[i].color}`;
            // boxValue.current.style.background = `${rows[i].color}`;
            setActivatedRow(rows[i]);
          start++;
        }
        start = new Date(start);
        // arr.push(n.setMilliseconds(sum));
      }
      // console.log(new Date(), arr, arr[0] - new Date());
      // console.log(n.toString());
      // if (i === 0) prev = new Date();
      // else prev = n;
      // n.setMilliseconds(sum);
      // while (prev !== n) {
      //   // document.body.style = `background: ${rows[i]};`;
      //   document.body.style.background = rows[i];
      //   let cur = prev.getMilliseconds();
      //   prev.setMilliseconds(cur++);
      // }
    }
    // for (let i = 0; i < rows.length; i++) {
    //   console.log(rows[i].color);
    //   int = setInterval(
    //     () => (document.body.style.background = `${rows[i].color}`),
    //     4000
    //   );
    // }
    // } else clearInterval(int);
    setPlay(!play);
  };

  // const playClickHandler = (props) => {
  //   if (play) {
  //     let start = 0;
  //     let sum = 0;
  //     for (let i = 0; i < rows.length; i++) {
  //       while (sum !== sum + rows[i].timeVal) {
  //         setColorNow(rows[i].color);
  //         if (i !== 0) setColorPast(rows[i - 1].color);
  //         setColorChange(true);
  //         sum++;
  //       }
  //     }
  //   }
  //   setPlay(!play);
  // };

  return (
    <>
      <div className="row">
        <div className="column"></div>
        <div className="column">
          <label htmlFor="InputValue" style={{ margin: "30px 10px 0 25%" }}>
            {" "}
            Enter the number of rows you would want to generate:{" "}
          </label>
          <input
            type="number"
            step="1"
            min="1"
            id="InputValue"
            style={{ margin: "30px 0 0 0" }}
            ref={numberVal}
          />
          <button type="submit" onClick={addClickHandler}>
            Add
          </button>
          <button onClick={playClickHandler}>{play ? "▶️" : "⏸"}</button>
          {/* <button onClick={playClickHandler}>{play ? "▶️" : "||"}</button> */}

          <table id="table-styling">
            <thead>
              <tr>
                <th>Arrow</th>
                <th>Time</th>
                <th>Color</th>
                <th>Shade</th>
              </tr>
            </thead>
            <tbody>
              {/* <td>=></td> */}
              <ColorDisplay items={rows} />
            </tbody>
          </table>
        </div>
        <div className="column"></div>
      </div>
      <div
        id="box"
        ref={boxValue}
        style={{ background: colorNow !== colorPast ? colorNow : colorPast }}
      />
    </>
  );
}

export default App;
