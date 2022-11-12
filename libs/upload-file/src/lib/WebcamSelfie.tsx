import React, { useRef, useCallback, useState } from 'react'

import Webcam, { } from "react-webcam";
import { Url } from 'url';

const WebcamSelfie = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string|null>(null);
  function capture() {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);




    }
  }

  return (
    <>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
            <img
                src={imgSrc}
            />
        )}
    </>
);
        }
  export default WebcamSelfie;
