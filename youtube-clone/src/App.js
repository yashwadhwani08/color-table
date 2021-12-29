import React, { useState } from "react";
import Navbar from "./components/UI/Navbar";
import Home from "./components/Home";
import VideoList from "./components/VideoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [videos, setVideos] = useState([]);
  const submitHandler = (obj) => {
    let vid;
    if (videos.length > 0) vid = [...videos, obj];
    else vid = [obj];
    setVideos((prev) => vid);
  };
  return (
    <>
      {/* <Home submit={submitHandler} /> */}
      {/* <Home /> */}
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route
            exact
            path="/video-list"
            element={<VideoList videos={videos} />}
          >
            {/* <VideoList /> */}
          </Route>

          <Route exact path="/" element={<Home submit={submitHandler} />}>
            {/* <Home /> */}
          </Route>
          <Route exact path="/home" element={<Home submit={submitHandler} />}>
            {/* <Home /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
