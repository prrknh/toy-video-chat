import React, { useEffect, useRef } from 'react'
import { UseRoom } from './UseRoom'

const RemoteVideo = (index: number) => {
  const [, remoteStreamList] = UseRoom()
  const streamRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (!streamRef || !streamRef.current) {
      console.log('nothing')
      return
    }
    console.log(streamRef.current)
    streamRef.current.srcObject = remoteStreamList[index]
    console.log(streamRef.current.srcObject)
    return
  })

  return <video ref={streamRef} />
}

export default RemoteVideo
