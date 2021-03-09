import React from 'react';
import styled from '@emotion/styled';

const Video = ({ videoSrcURL, videoTitle }) => {
  const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  `;

  const VideoFrame = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `;
  return (
    <VideoContainer>
      <VideoFrame
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </VideoContainer>
  );
};

export default Video;
