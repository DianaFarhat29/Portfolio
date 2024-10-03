import React, { useState, useEffect, useRef } from "react";

interface ProjectVideoProps {
  videoSrc: string;
  altText: string;
  placeholderSrc: string;
}

const ProjectVideo: React.FC<ProjectVideoProps> = ({ videoSrc, altText, placeholderSrc }) => {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseOver = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (isMobile) {
      // handle mobile click event, such as showing the video in a modal
    }
  };

  return (
    <div
      className="h-5/6 rounded-t-md cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="h-full w-full rounded-t-md"
        muted
        playsInline
        src={videoSrc}
        poster={isMobile ? placeholderSrc : undefined}
      />
    </div>
  );
};

export default ProjectVideo;
