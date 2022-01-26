import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./UI/Modal";
import "./VideoList.css";

const VideoList = (props) => {
  const [modalShow, setModalShow] = useState("");
  const inputRef = useRef();
  const keyDownHandler = (event, youtubeLink) => {
    if (event.keyCode === 13) {
      let value = inputRef.current.value;
      let timeStampped = youtubeLink + "&t=" + value + "s";
      navigator.clipboard.writeText(timeStampped);
      setModalShow(true);
    }
  };
  if (props.videos.length > 0) {
    const listItems = props.videos.map((element) => {
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
          <td>
            <label htmlFor="timeStamp" style={{ display: "block" }}>
              Enter the time at which you want to start the video
            </label>
            <input
              type="number"
              id="timeStamp"
              onKeyDown={(event) => keyDownHandler(event, element.youtubeLink)}
              ref={inputRef}
            />
          </td>
        </tr>
      );
    });
    return (
      <>
        {modalShow && (
          <Modal
            onClose={() => {
              setModalShow(false);
            }}
          />
        )}
        <table>
          <thead>
            <tr>
              <th>YouTube Video Title</th>
              <th>YouTube Video Link</th>
              <th>YouTube Permalink</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </>
    );
  } else
    return (
      <div style={{ display: "block", textAlign: "-webkit-center" }}>
        <h1>Currently no videos added!</h1>
      </div>
    );
};

export default VideoList;
