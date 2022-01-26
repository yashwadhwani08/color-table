import React, { useState, useRef } from "react";
import "./Home.css";

const Home = (props) => {
  const [message, setMessage] = useState();
  const inputRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      inputRef.current.value &&
      inputRef.current.value.includes("www.youtube.com/") &&
      inputRef.current.value.includes("v=")
    ) {
      const linkVal = inputRef.current.value;
      const id = linkVal.split("v=")[1].substring(0, 11);
      const response = await fetch(
        "http://img.youtube.com/vi/" + id + "/mqdefault.jpg"
      );

      if (response.status === 200) {
        if (props.videos.length > 0) {
          if (props.videos.some((item) => item.id === id)) {
            setMessage("A video with the same link already exists.");
            inputRef.current.value = "";
            return;
          }
        }
        props.submit({
          youtubeLink: linkVal,
          id: id,
        });
        setMessage("Successfully added!");
      } else {
        setMessage("Seems like the video id is invalid");
      }
    } else {
      setMessage("Please give valid input!");
    }
    inputRef.current.value = "";
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
        <input type="url" ref={inputRef} onFocus={() => setMessage("")} />
        <button type="submit">Submit</button>
      </form>
      {message && (
        <div
          style={{ marginLeft: "auto", marginRight: "auto", width: "500px" }}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default Home;
