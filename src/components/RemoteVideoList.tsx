import React, { createRef, RefObject, useEffect, useState } from 'react'
import RemoteVideo from './RemoteVideo'

const RemoteVideoList = (remoteStreamList: MediaStream[]) => {
  const [remoteVideoRefList, setRemoteVideoRefList] = useState<
    RefObject<HTMLVideoElement>[]
  >([])

  useEffect(() => {
    console.log('remote video list use effect')
    setRemoteVideoRefList(
      remoteStreamList.map(() => {
        console.log('remote map')
        const videoRef: RefObject<HTMLVideoElement> = createRef<
          HTMLVideoElement
        >()
        // // @ts-ignore
        // videoRef.current.srcObject = remoteStream
        return videoRef
      }),
    )
    console.log(remoteStreamList)
    console.log(remoteVideoRefList)
    console.log('end remote video list use effect')
  }, [remoteStreamList])

  /*
    {remoteStreamList.map((_, i)=> {
      <div ref={remoteVideoRefList[i]}
        })
      }
  */
  // const click = (e: any, index: number) => {
  //   console.log(e, index)
  // }

  return (
    <div>
      {remoteStreamList.map(
        (stream, index) => RemoteVideo(remoteVideoRefList[index], stream),
        // <video
        //   ref={remoteVideoRefList[index]}
        //   autoPlay={false}
        //   onClick={(e) => click(e, index)}
        // />
      )}
    </div>
  )
}
export default RemoteVideoList
