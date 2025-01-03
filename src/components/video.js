import React from "react"

const Video = ({ videoSrcURL, videoTitle }) => {
  return (
    <div>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}

export default Video
