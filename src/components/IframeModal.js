import { useState } from "react";
import YouTube from "react-youtube";
import "../styles/iframebox.css";

const IframeModal = ({
  itemName,
  itemType,
  iframeBox,
  setiframeBox,
  handleHistory,
}) => {
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  // console.log(iframeBox);
  // const ytsrc = `${iframeBox[0]}`;
  function extractYoutubeId(yid) {
    if (yid.includes("v=")) return yid.slice(yid.indexOf("v=") + 2);
    else {
      let temp = yid.slice(8);
      return temp.slice(temp.indexOf("/") + 1);
    }
  }

  // const time = (e) => {
  //   console.log(e);
  // };
  const [event, setEvent] = useState(null);
  const handleIframe = (e) => {
    setEvent(e);
    // console.log(event.target.getCurrentTime());
    return event.target.getCurrentTime();
  };

  const ytid = extractYoutubeId(iframeBox[0]);
  // console.log(ytsrc);
  return (
    <div className="iframeBox">
      <div className="closebtn">
        <button
          className="closeiframe"
          onClick={() => {
            const time = handleIframe();
            const newObj = {
              name: itemName,
              type: itemType,
              time: time,
            };
            // setHitem((prev) => prev.push(newObj));
            handleHistory(newObj);
            setiframeBox([null, false]);
          }}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
      <div className="mainscreen">
        <YouTube
          videoId={ytid}
          opts={opts}
          onStateChange={handleIframe}
          onEnd={handleIframe}
        />
      </div>
    </div>
  );
};

export default IframeModal;
