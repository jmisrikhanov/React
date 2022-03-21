import React, { useEffect, useState } from "react";
import "./Channel.scss";

const Channels = ({ channel }) => {
  const [showImage, setShowImage] = useState(false);

  const withImage = () => {
    return (
      <div
        className="channel_wrapper_image"
        onClick={() => setShowImage((prevState) => !prevState)}
      >
        <div className="image_wrapper">
          <img className="radio_image" src={channel.image} alt="" />
        </div>
        <div className="channel_wrapper">
          <span>{channel.name}</span> {/*channel name*/}
          <span>{channel.frequency}</span> {/*channel frequency*/}
        </div>
      </div>
    );
  };
  const withoutImage = () => {
    return (
      <div
        className="channel_wrapper"
        onClick={() => setShowImage((prevState) => !prevState)}
      >
        <span>{channel.name}</span> {/*channel name*/}
        <span>{channel.frequency}</span> {/*channel frequency*/}
      </div>
    );
  };

  return (
    <div className="channels">{showImage ? withImage() : withoutImage()}</div>
  );
};

export default Channels;
