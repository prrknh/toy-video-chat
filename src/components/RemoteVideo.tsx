import React, { RefObject, useEffect } from 'react'
// import { UseRoom } from './UseRoom'

const RemoteVideo = (ref: RefObject<HTMLVideoElement>, stream: MediaStream) => {
  // const [, remoteStreamList] = UseRoom()
  // const streamRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    // const currentRemoteStream = remoteStreamList[index]
    if (!ref || !ref.current) {
      console.log('nothing')
      return
    }
    console.log(ref.current)
    ref.current.srcObject = stream
    console.log(ref.current.srcObject)
    return
  })

  return <video ref={ref} id="hoge" />
}

export default RemoteVideo
