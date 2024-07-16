import React, { useState } from "react";

interface ProjectVideoProps {
  videoSrc: string;
  altText: string;
  placeholderSrc: string;
}

const ProjectVideo: React.FC<ProjectVideoProps> = ({ videoSrc, altText, placeholderSrc }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVideoVisible(true);
  };

  const handleMouseOut = () => {
    setIsVideoVisible(false);
  };

  const handleClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <div
      className="h-5/6 rounded-t-md cursor-pointer "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {isVideoVisible ? (
        <video
          className="h-full w-full rounded-t-md"
          muted
          autoPlay
          loop
          playsInline
          src={videoSrc}
        />
      ) : (
        <img className="h-full w-full rounded-t-md" src={placeholderSrc} alt={altText} />
      )}
    </div>
  );
};

export default ProjectVideo;
