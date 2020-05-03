import React, { useEffect } from 'react'
import Peer from 'skyway-js'
import { RemoteVideoList } from './RemoteVideoList'
import { LocalVideo } from './LocalVideo'
import { useRemoteStreamList } from '../hooks/UseRemoteStreamList'
import Grid from '@material-ui/core/Grid'
import useReactRouter from 'use-react-router'

export const Room = () => {
  const { history, location } = useReactRouter()
  const [addStream, removeStream, remoteStreamList] = useRemoteStreamList()

  const roomId = location.search.replace('?', '')
  if (roomId === '') {
    history.push('/')
  }

  useEffect(() => {
    let localStream: MediaStream
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then((stream) => {
        localStream = stream
      })
    const peer = new Peer({
      key: '4d7443bf-a5cb-499a-99be-d4e6b28da8a6',
      debug: 0,
    })
    let newRoom
    peer.on('open', () => {
      newRoom = peer.joinRoom(roomId, {
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
    <Grid container justify="center" alignItems="center" spacing={3}>
      <LocalVideo />
      {RemoteVideoList(remoteStreamList)}
    </Grid>
  )
}
