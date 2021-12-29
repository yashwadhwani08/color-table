import React from "react";
import "./VideoList.css";

const VideoList = (props) => {
  if (props.videos.length > 0) {
    const listItems = props.videos.map((element) => {
      return (
        <tr key={Math.random()}>
          <td>{element.youtubeLink}</td>
          <td>{element.youtubeLink}</td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>YouTube Video Link</th>
            <th>Start from middle</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    );
  } else
    return (
      <div style={{ display: "block", textAlign: "-webkit-center" }}>
        <h1>Currently no videos added!</h1>
      </div>
    );
};

export default VideoList;
