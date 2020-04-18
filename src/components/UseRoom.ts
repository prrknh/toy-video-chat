import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Peer, { SfuRoom } from 'skyway-js'
import { useCamera } from './UseCamera'

export const UseRoom = () => {
  const [localStream, ,] = useCamera(null)
  const [roomId] = useState('')
  const [remoteStreamList, setRemoteStreamList] = useState(new Array(0))
  const [room, setRoom]: [
    SfuRoom | null,
    Dispatch<SetStateAction<SfuRoom | null>>,
  ] = useState<SfuRoom | null>(null)

  useEffect(() => {
    // if (roomId === '') {
    //   return
    // }
    if (room) {
      return
    }
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
        console.log('received stream event')
        console.log(stream)
        setRemoteStreamList(remoteStreamList.concat(stream))
        console.log(remoteStreamList)
      })
      console.log(newRoom)
      setRoom(newRoom)
    })
    if (peer.open) {
      console.log('peer is not opened')
      console.log(peer)
      return
    }
  }, [roomId])
  return [room, remoteStreamList] as const
}
