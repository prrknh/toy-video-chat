import React, { createRef, RefObject, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import 'style/video.css'

export const RemoteVideoList = (remoteStreamList: MediaStream[]) => {
  let refList: RefObject<HTMLVideoElement>[] = Array(remoteStreamList.length)
    .fill(null)
    .map((_) => createRef<HTMLVideoElement>())

  useEffect(() => {
    refList = Array(remoteStreamList.length)
      .fill(null)
      .map((_, i) => {
        const rel = refList[i]
        if (rel.current) {
          rel.current.srcObject = remoteStreamList[i]
        }
        return rel
      })
  }, [remoteStreamList])

  return (
    <React.Fragment>
      {remoteStreamList.map((_, i) => (
        <Grid item xs={12} sm={6}>
          <video
            className="video"
            onContextMenu={(event) => event.preventDefault()}
            ref={refList[i]}
            autoPlay
            playsInline
          />
        </Grid>
      ))}
    </React.Fragment>
  )
}
