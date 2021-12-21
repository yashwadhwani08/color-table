import React, { useRef, useState } from "react";
import ColorDisplay from "./components/ColorDisplay";
import "./RootStyles.css";

let globalIndex;
let id;
function App() {
  const [rows, setRows] = useState([]);
  const [paused, setPaused] = useState(true);
  const [currentRow, setCurrentRow] = useState();
  const [timeNow, setTimeNow] = useState();
  const [colorBg, setColorBg] = useState();
  const colorArr = ["Red", "Blue", "Green", "Purple", "Orange", "Yellow"];
  const inputRef = useRef();
  const timeRef = useRef();
  const addClickHandler = (event) => {
    let n = inputRef.current.value;
    if (n.trim().length !== 0) {
      let arr = [];
      for (let i = 0; i < n; i++) {
        arr.push({
          id: "e" + i + Math.random().toString(),
          time: Math.floor(Math.random() * (250 + 1 - 10) + 10) * 10,
          color: colorArr[Math.floor(Math.random() * colorArr.length)],
          shade: Math.random().toFixed(1),
        });
      }
      setRows(arr);
    }
    inputRef.current.value = "";
    setTimeNow();
  };

  const playClickHandler = (event) => {
    if (paused === true) {
      setPaused(false);
      let currentTime, index;

      if (+timeRef.current.innerHTML > 0 && globalIndex !== rows.length) {
        currentTime = +timeRef.current.innerHTML;
        console.log("This is working");
        console.log(currentTime);
      } else currentTime = 0;

      if (!currentRow) {
        index = 0;
        setCurrentRow(rows[0]);
      } else
        index = rows.findIndex((element) => {
          return element.id === currentRow.id;
        });
      setColorBg(rows[index].color);
      id = setInterval(() => {
        currentTime += 10;
        if (index < rows.length) setTimeNow(currentTime);
        else return;
        if (rows[index].time === currentTime) {
          index++;
          currentTime = 0;

          if (index !== rows.length) {
            setColorBg(rows[index].color);
            setCurrentRow(rows[index]);
          } else {
            setColorBg("White");
            console.log(
              "This seems to be working, currently paused = ",
              paused
            );
            setPaused(true);
            setCurrentRow();
            globalIndex = index;
          }
        }
      }, 10);
      console.log("Index = ", index, "Id = ", id);
    } else {
      clearInterval(id);
      setPaused(true);
      globalIndex = rows.length - 1;
    }
  };

  return (
    <>
      <div className="row">
        <div className="column" style={{ background: `${colorBg}` }}>
          <div id="box" ref={timeRef}>
            {timeNow}
          </div>
        </div>
        <div className="column">
          <label htmlFor="noOfRows" style={{ marginRight: "4px" }}>
            Enter the number of rows you need :
          </label>
          <input id="noOfRows" type="number" min="1" step="1" ref={inputRef} />
          <button style={{ marginLeft: "4px" }} onClick={addClickHandler}>
            Add
          </button>
          <button style={{ marginLeft: "4px" }} onClick={playClickHandler}>
            {paused ? "▶️" : "⏸"}
          </button>
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
              <ColorDisplay items={rows} active={currentRow} />
            </tbody>
          </table>
        </div>
        <div className="column" style={{ background: `${colorBg}` }}>
          <div id="box" ref={timeRef}>
            {timeNow}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
