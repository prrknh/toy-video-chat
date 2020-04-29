import { useState } from 'react'

export const useRemoteStreamList = () => {
  const [remoteStreamList, setRemoteStreamList] = useState<MediaStream[]>([])

  const addStream = (stream: MediaStream) => {
    setRemoteStreamList((remoteStreamList) => [...remoteStreamList, stream])
  }

  const removeStream = (peerId: string) => {
    setRemoteStreamList(
      remoteStreamList.filter((stream) => stream.id != peerId),
    )
  }

  return [addStream, removeStream, remoteStreamList] as const
}
