import React, { useState, useRef } from "react";
import "./Home.css";

const Home = (props) => {
  const [data, setData] = useState();
  // if (props.video && props.videos.length === 0) setData("No data available currently");
  // else
  //   setData(
  //     "To check list of videos added, click Video List in navigation bar!"
  //   );
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      const linkVal = inputRef.current.value;
      props.submit({
        youtubeLink: linkVal,
        id: Math.random().toString(),
      });
      setData("Successfully added!");
      inputRef.current.value = "";
    } else {
      setData("Please give valid input!");
    }
  };
  return (
    <>
      <form
        style={{
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "500px",
        }}
        onSubmit={submitHandler}
      >
        <label htmlFor="youtube-link">Enter the Youtube Link here: </label>
        <input
          type="url"
          ref={inputRef}
          //   onChange={() => setData()}
          onFocus={() => setData()}
        />
        <button type="submit">Submit</button>
      </form>
      {data && (
        <div
          style={{ marginLeft: "auto", marginRight: "auto", width: "500px" }}
        >
          {data}
        </div>
      )}
    </>
  );
};

export default Home;
