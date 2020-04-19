import React, { RefObject } from 'react'
// import { UseRoom } from './UseRoom'

const RemoteVideo = (ref: RefObject<HTMLVideoElement>, stream: MediaStream) => {
  // const [, remoteStreamList] = UseRoom()
  // const streamRef = useRef<HTMLVideoElement>(null)
  // const currentRemoteStream = remoteStreamList[index]
  console.log('set remote video')
  if (!ref || !ref.current) {
    console.log('nothing')
    return
  }
  console.log(ref.current)
  ref.current.srcObject = stream
  console.log(ref.current.srcObject)
  console.log('complete set remote video')

  return <video ref={ref} id="hoge" />
}

export default RemoteVideo
