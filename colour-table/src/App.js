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
  // const [height, setHeight] = useState(window.innerHeight);
  const height = window.innerHeight;
  const addClickHandler = (event) => {
    if (event.keyCode === 13) {
      let n = inputRef.current.value;
      if (n.trim().length !== 0 && +n > 0) {
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
      // inputRef.current.value = "";
      setTimeNow();
      globalIndex = 0;
      setCurrentRow();
      setPaused(true);
      clearInterval(id);
      setColorBg("white");
      // if (35 * n + 95 > window.innerHeight) setHeight(35 * n + 95);
      // else setHeight(window.innerHeight);
    }
  };

  const playClickHandler = (event) => {
    if (paused === true) {
      setPaused(false);
      let currentTime, index;

      if (+timeRef.current.innerHTML > 0 && globalIndex !== rows.length) {
        currentTime = +timeRef.current.innerHTML;
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
            setPaused(true);
            setCurrentRow();
            globalIndex = index;
            clearInterval(id);
          }
        }
      }, 10);
      console.log("Index = ", index, "Id = ", id);
    } else {
      clearInterval(id);
      setPaused(true);
      globalIndex = 0;
    }
  };

  return (
    <>
      <div className="row">
        <div
          className="column"
          style={{ background: `${colorBg}`, height: `${height}px` }}
        >
          <div id="box" ref={timeRef}>
            {timeNow}
          </div>
        </div>
        <div className="column column-center" style={{ height: `${height}px` }}>
          <label htmlFor="noOfRows" style={{ marginRight: "4px" }}>
            Enter the number of rows you need :
          </label>
          <input
            id="noOfRows"
            type="number"
            min="1"
            step="1"
            ref={inputRef}
            onKeyUp={addClickHandler}
          />
          {/* <button style={{ marginLeft: "4px" }} onClick={addClickHandler}>
            Add
          </button> */}
          {rows.length > 0 ? (
            <button style={{ marginLeft: "4px" }} onClick={playClickHandler}>
              {paused ? "▶️" : "⏸"}
            </button>
          ) : (
            <button
              style={{ marginLeft: "4px" }}
              onClick={playClickHandler}
              disabled
            >
              {paused ? "▶️" : "⏸"}
            </button>
          )}
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
              <ColorDisplay
                items={rows}
                active={currentRow}
                // divHeight={setHeight}
              />
            </tbody>
          </table>
        </div>
        <div
          className="column"
          style={{ background: `${colorBg}`, height: `${height}px` }}
        >
          <div id="box" ref={timeRef}>
            {timeNow}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
