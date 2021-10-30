import { createContext, useEffect } from 'react'

import useSocket from '../../hooks/useSocket'
import useAuthContext from '../../hooks/useAuthContext'

export const SocketContext = createContext()

const API = {
  DEV: 'http://localhost:8080',
  PRD: 'https://yarmo-chat-server.herokuapp.com/'
}

const SocketState = ({ children }) => {
  const { isAuth } = useAuthContext()
  const { online, socket, ...actions } = useSocket(API.PRD)

  useEffect(() => {
    if (isAuth) {
      actions.connectSocket()
    }
  }, [isAuth, actions.connectSocket])

  useEffect(() => {
    if (!isAuth) {
      actions.disconnectSocket()
    }
  }, [isAuth, actions.disconnectSocket])

  return (
    <SocketContext.Provider value={{ online, socket }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketState
