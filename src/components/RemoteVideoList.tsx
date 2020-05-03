import React, { useEffect, useRef } from 'react'
import { Grid } from '@material-ui/core'
import 'style/video.css'

export const RemoteVideoList = (remoteStreamList: MediaStream[]) => {
  const listRef = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    console.log(remoteStreamList)
    listRef.current = listRef.current.splice(0, remoteStreamList.length)
    remoteStreamList.forEach((stream, i) => {
      const currentRef: HTMLVideoElement | null = listRef.current[i]
      if (currentRef == null) return
      currentRef.srcObject = stream
    })
  }, [remoteStreamList])

  return (
    <React.Fragment>
      {remoteStreamList.map((_, i) => (
        <Grid item xs={12} sm={6} justify="center" alignItems="center">
          <video
            className="video"
            onContextMenu={(event) => event.preventDefault()}
            ref={(el) => (listRef.current[i] = el)}
            autoPlay
            playsInline
          />
        </Grid>
      ))}
    </React.Fragment>
  )
}
