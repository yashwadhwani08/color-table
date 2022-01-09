import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./VideoList.css";

const VideoList = (props) => {
  const newArr = [...props.videos];
  useEffect(() => {
    var ytApiKey = "AIzaSyCbPEIO-doFWqVa08tb_y3DzfPt2HQChX0";   
    newArr.forEach((element) => {
      let vidId = element.youtubeLink.split("v=")[1].substring(0, 11);
      $.get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
          vidId +
          "&key=" +
          ytApiKey,
        function (data) {
          element["name"] = data.items[0].snippet.title;
        }
      );
    });
  }, [props.videos.length]);

  if (props.videos.length > 0) {
    const listItems = newArr.map((element, i) => {
      return (
        <tr key={element.id}>
          <td>{element.name}</td>
          <td>
            <Link
              to={{
                pathname: `/play-video/${element.youtubeLink
                  .split("v=")[1]
                  .substring(0, 11)}`,
              }}
            >
              {element.youtubeLink}
            </Link>
          </td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>YouTube Video Title</th>
            <th>YouTube Video Link</th>
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
