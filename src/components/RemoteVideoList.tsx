import React, { createRef, RefObject, useEffect } from 'react'

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
    <div>
      {remoteStreamList.map((_, i) => (
        <video
          onContextMenu={(event) => event.preventDefault()}
          ref={refList[i]}
          autoPlay
          playsInline
        />
      ))}
    </div>
  )
}
