import React, { useEffect, useState, RefObject, Dispatch } from 'react'

const initialiseCamera = async () =>
  await navigator.mediaDevices.getUserMedia({ audio: true, video: true })

export const useCamera = (videoRef: RefObject<HTMLVideoElement>) => {
  const [isCameraInitialised, setIsCameraInitialised] = useState(false)
  const [video, setVideo] = useState<null | HTMLVideoElement>()
  const [error, setError] = useState('')
  const [playing, setPlaying]: [
    boolean,
    Dispatch<React.SetStateAction<boolean>>,
  ] = useState<boolean>(true)

  useEffect(() => {
    if (video || !videoRef.current) {
      return
    }

    setVideo(videoRef.current)
  }, [videoRef, video])

  useEffect(() => {
    if (!video || isCameraInitialised || !playing) {
      return
    }

    initialiseCamera()
      .then((stream) => {
        video.srcObject = stream
        setIsCameraInitialised(true)
      })
      .catch((e) => {
        setError(e.message)
        setPlaying(false)
      })
  }, [video, isCameraInitialised, playing])

  useEffect(() => {
    const videoElement = videoRef.current

    if (!videoElement) {
      return
    }

    if (playing) {
      videoElement.play()
    } else {
      videoElement.pause()
    }
  }, [playing, videoRef])

  return [video, isCameraInitialised, playing, setPlaying, error] as const
}
