import { useCallback, useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

const useSocket = (serverPath) => {
  const socket = useRef()
  const [online, setOnline] = useState(false)

  const connectSocket = useCallback(() => {
    const token = localStorage.getItem('token')

    const socketTemp = io(serverPath, {
      forceNew: true,
      autoConnect: true,
      transports: ['websocket'],
      query: { 'x-token': token }
    })

    socket.current = socketTemp
  }, [serverPath])

  const disconnectSocket = useCallback(() => {
    socket.current?.disconnect()
  }, [socket.current])

  useEffect(() => {
    socket.current?.on('connect', () => {
      setOnline(true)
    })
  }, [socket])

  useEffect(() => {
    socket.current?.on('disconnect', () => {
      setOnline(false)
    })
  }, [socket])

  return {
    online,
    connectSocket,
    disconnectSocket,
    socket: socket.current
  }
}

export default useSocket
