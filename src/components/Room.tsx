import React, { useEffect } from 'react'
import Peer, { SfuRoom } from 'skyway-js'
import { RemoteVideoList } from './RemoteVideoList'
import { LocalVideo } from './LocalVideo'
import { useRemoteStreamList } from '../hooks/UseRemoteStreamList'

let localStream: MediaStream

export const Room = () => {
  const [addStream, removeStream, remoteStreamList] = useRemoteStreamList()

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((stream) => {
      localStream = stream
    })

  useEffect(() => {
    const peer = new Peer({
      key: '4d7443bf-a5cb-499a-99be-d4e6b28da8a6',
      debug: 0,
    })
    let newRoom
    peer.on('open', () => {
      newRoom = peer.joinRoom<SfuRoom>('hoge', {
        mode: 'sfu',
        stream: localStream,
      })
      newRoom.on('peerJoin', (peerId) => {
        console.log(peerId)
        console.log('peer join!!!')
      })
      newRoom.on('stream', async (stream) => {
        console.log('receive stream!!!')
        addStream(stream)
      })
      newRoom.on('peerLeave', (peerId) => {
        console.log('peer leave!!!')
        removeStream(peerId)
      })
      console.log(newRoom)
    })
    if (peer.open) {
      console.log('peer is not opened')
      console.log(peer)
      return
    }
  }, [])

  return (
    <div>
      <LocalVideo />
      {RemoteVideoList(remoteStreamList)}
    </div>
  )
}
