import { UseRoom } from './UseRoom'
import React, { createRef, RefObject, useEffect, useState } from 'react'

const RemoteVideoList = () => {
  const [, remoteStreamList] = UseRoom()
  const [remoteVideoRefList, setRemoteVideoRefList] = useState<
    RefObject<HTMLVideoElement>[]
  >([])

  useEffect(() => {
    console.log('remote video list use effect')
    setRemoteVideoRefList(
      remoteStreamList.map(() => {
        const videoRef: RefObject<HTMLVideoElement> = createRef<
          HTMLVideoElement
        >()
        // // @ts-ignore
        // videoRef.current.srcObject = remoteStream
        return videoRef
      }),
    )
  }, [remoteStreamList])

  /*
    {remoteStreamList.map((_, i)=> {
      <div ref={remoteVideoRefList[i]}
        })
      }
  */
  const click = (e: any, index: number) => {
    console.log(e, index)
  }

  return (
    <div>
      {remoteStreamList.map((_, index) => (
        <video
          ref={remoteVideoRefList[index]}
          autoPlay={false}
          onClick={(e) => click(e, index)}
        />
      ))}
    </div>
  )
}
export default RemoteVideoList
