import { useCallback, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const useSocket = (serverPath) => {
  const [socket, setSocket] = useState(null)
  const [online, setOnline] = useState(false)

  const connectSocket = useCallback(() => {
    const token = localStorage.getItem('token')

    const socketTemp = io(serverPath, {
      forceNew: true,
      autoConnect: true,
      transports: ['websocket'],
      query: { 'x-token': token }
    })

    setSocket(socketTemp)
  }, [serverPath])

  const disconnectSocket = useCallback(() => {
    socket?.disconnect()
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => {
      setOnline(true)
    })
  }, [socket])

  useEffect(() => {
    socket?.on('disconnect', () => {
      setOnline(false)
    })
  }, [socket])

  return {
    online,
    socket,
    connectSocket,
    disconnectSocket
  }
}

export default useSocket
