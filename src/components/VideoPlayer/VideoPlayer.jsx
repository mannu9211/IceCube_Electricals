import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/video.mp4'
import { useRef } from 'react'

const VideoPlayer = ({playState, setPlayState}) => {
    const Player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === Player.current) {
            setPlayState(false);
        }
    };

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={Player} onClick={closePlayer}>
      <video src={video} autoplay muted controls></video>
    </div>
  )
}

export default VideoPlayer
