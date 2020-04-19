import React, { useEffect, useRef } from 'react'
import { UseRoom } from './UseRoom'

const RemoteVideo = (index: number) => {
  const [, remoteStreamList] = UseRoom()
  const streamRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const currentRemoteStream = remoteStreamList[index]
    if (!streamRef || !streamRef.current) {
      console.log('nothing')
      return
    }
    console.log(streamRef.current)
    streamRef.current.srcObject = currentRemoteStream
    console.log(streamRef.current.srcObject)
    return
  })

  return <video ref={streamRef} />
}

export default RemoteVideo
