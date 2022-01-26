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
  const submitHandler = async (obj) => {
    let vid;
    let vidId = obj.youtubeLink.split("v=")[1].substring(0, 11);
    const ytApiKey = process.env.REACT_APP_YOUTUBE_API
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
        vidId +
        "&key=" +
        ytApiKey
    );
    const response = await data.json();
    obj["name"] = response.items[0].snippet.title;
    if (videos.length > 0) {
      vid = [...videos, obj];
    } else {
      vid = [obj];
    }
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
          <Route
            path="/play-video/:vidID"
            element={<PlayVideo videos={videos} />}
          ></Route>
          <Route exact path="/" element={<Navigate replace to="/home" />} />
          <Route
            exact
            path="/home"
            element={<Home videos={videos} submit={submitHandler} />}
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
