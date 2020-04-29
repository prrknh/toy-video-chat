import React from 'react'

export const RemoteVideoList = (remoteStreamList: MediaStream[]) => {
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
