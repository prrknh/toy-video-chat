import React, { createRef } from 'react'
import { useCamera } from 'hooks/UseCamera'
import { Button } from '@material-ui/core'

const LocalVideo = () => {
  const videoRef = createRef<HTMLVideoElement>()
  const [, , , running, setPlaying] = useCamera(videoRef)

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay={false}
        muted={false}
        controls
        width={480}
        height={270}
      />
      <Button onClick={() => setPlaying(!running)}>
        {running ? 'Stop' : 'Start'}
      </Button>
    </div>
  )
}

export default LocalVideo
