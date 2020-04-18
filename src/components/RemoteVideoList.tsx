import React from 'react'
import { UseRoom } from 'components/UseRoom'

const RemoteVideoList = () => {
  const [, remoteStreamList] = UseRoom()

  return (
    <ul>
      {remoteStreamList.map(async (remoteStream, index) => {
        console.log(index)
        const newVideo = document.createElement('video')
        newVideo.srcObject = remoteStream
        await newVideo.play().catch(console.error)
        return newVideo
      })}
    </ul>
  )
}

export default RemoteVideoList
