import React, { createRef } from 'react'
import { useCamera } from 'hooks/UseCamera'
import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import 'style/video.css'

export const LocalVideo = () => {
  const videoRef = createRef<HTMLVideoElement>()
  const [, , , running, setPlaying] = useCamera(videoRef)

  return (
    <Grid item xs={12} sm={6}>
      <video
        className="video"
        ref={videoRef}
        autoPlay={false}
        muted={false}
        controls
      />
      <Button onClick={() => setPlaying(!running)}>
        {running ? 'Stop' : 'Start'}
      </Button>
    </Grid>
  )
}
