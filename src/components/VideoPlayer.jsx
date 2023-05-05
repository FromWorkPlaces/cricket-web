import React, { useEffect, useRef } from 'react'

function VideoPlayer({videoId}) {
    const videoRef = useRef(null)

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.pause();
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        } else {
            console.log("No videoRef")
        }
    })

    return (
        <video ref={videoRef} width="250" height="500" controls autoPlay>
            <source src={`http://192.168.0.108:5000/video/${videoId}`}/>
            Your browser does not support the video tag
        </video>
    )
}

export default VideoPlayer