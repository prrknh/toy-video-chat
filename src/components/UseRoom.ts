import { useEffect } from 'react'
import Peer, { SfuRoom } from 'skyway-js'
import { useCamera } from '../hooks/UseCamera'
import { RemoteVideoList } from './RemoteVideoList'
import { useRemoteStreamList } from '../hooks/UseRemoteStreamList'

export const Room = () => {
  const [localStream, ,] = useCamera(null)
  const [addStream, , remoteStreamList] = useRemoteStreamList()

  useEffect(() => {
    const peer = new Peer({
      key: '4d7443bf-a5cb-499a-99be-d4e6b28da8a6',
      debug: 3,
    })
    let newRoom
    peer.on('open', () => {
      newRoom = peer.joinRoom<SfuRoom>('hoge', {
        mode: 'sfu',
        stream: localStream,
      })
      newRoom.on('stream', async (stream) => {
        console.log('receive stream')
        addStream(stream)
      })
      console.log(newRoom)
    })
    if (peer.open) {
      console.log('peer is not opened')
      console.log(peer)
      return
    }
  }, [])
  return RemoteVideoList(remoteStreamList)
}
