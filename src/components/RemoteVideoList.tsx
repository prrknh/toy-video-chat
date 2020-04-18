import { UseRoom } from './UseRoom'
import RemoteVideo from './RemoteVideo'
import React from 'react'

const RemoteVideoList = () => {
  const [, remoteStreamList] = UseRoom()

  return (
    <div>
      {remoteStreamList.map((index) => {
        console.log(index)
        console.log('video item')
        RemoteVideo(index)
      })}
    </div>
  )
}
export default RemoteVideoList
