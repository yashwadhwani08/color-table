import React from "react";
import "./PlayVideo.css";
import { useParams } from "react-router-dom";

const PlayVideo = (props) => {
  const params = useParams();
  console.log(props, "Hiiii");
  console.log(params);
  let src = "https://www.youtube.com/embed/" + `${params.vidID}`;
  let list = null;
  if (props.videos) {
    list = props.videos.map((element) => {
      let srcSmall =
        "https://www.youtube.com/embed/" +
        `${element.youtubeLink.split("v=")[1].substring(0, 11)}`;
      return (
        <iframe
          key={Math.random()}
          width="500"
          height="250"
          src={srcSmall}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    });
  }
  // console.log(props.match.params.vidID);
  return (
    <>
      <div style={{ marginLeft: "10px", marginRight: "10px" }}>
        {/* <h1>URL params is {params.vidID}</h1> */}
        {/* <video controls width="1280" height="720" style={{ marginTop: "300" }} title="YouTube video player">
        <source src="https://www.youtube.com/watch?v=6b9v8oUR5ro" title="YouTube video player"/>
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video> */}

        <iframe
          width="100%"
          height="600"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* {list} */}
      </div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          display: "block",
          textAlign: "-webkit-center",
        }}
      >
        <p>All available videos here are: </p>
      </div>
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>{list}</div>
    </>
  );
};

export default PlayVideo;
