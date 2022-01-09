import React, { useState } from "react";
import Navbar from "./components/UI/Navbar";
import Home from "./components/Home";
import VideoList from "./components/VideoList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PlayVideo from "./components/PlayVideo";

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
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route
            exact
            path="/video-list"
            element={<VideoList videos={videos} />}
          />  
          <Route path="/play-video/:vidID" element={<PlayVideo videos={videos}/>}></Route>
          <Route
            exact
            path="/"            
            element={<Navigate replace to="/home" />}
          />
          <Route
             exact
            path="/home"
            element={<Home submit={submitHandler} />}
          >            
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
