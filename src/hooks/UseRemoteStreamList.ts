import { useState } from 'react'

class SkyWayMediaStream extends MediaStream {
  peerId?: string
}

export const useRemoteStreamList = () => {
  const [remoteStreamList, setRemoteStreamList] = useState<SkyWayMediaStream[]>(
    [],
  )

  const addStream = (stream: SkyWayMediaStream) => {
    setRemoteStreamList((remoteStreamList) => [...remoteStreamList, stream])
  }

  const removeStream = (peerId: string) => {
    setRemoteStreamList((remoteStreamList) => {
      return remoteStreamList.filter((stream) => stream.peerId !== peerId)
    })
  }

  return [addStream, removeStream, remoteStreamList] as const
}
