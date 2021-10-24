import { useReducer, createContext, useContext, useEffect } from 'react'

import ChatReducer from './ChatReducer'
import { chatActions } from './chatActions'
import { GET_USERS, EMIT_MESSAGE } from '../../types/sockets'
import { SocketContext } from '../socket/SocketState'
import { scrollToBottom } from '../../utils/scrollToBottom'

export const initialState = {
  uid: '',
  users: [], // Todos los usuarios
  messages: [], // Chat seleccionado
  activeChat: null // UID del usuario al que le envio mensajes
}

export const ChatContext = createContext({})

const ChatState = ({ children }) => {
  const { socket } = useContext(SocketContext)
  const [state, dispatch] = useReducer(ChatReducer, initialState)

  const actions = chatActions(state, dispatch)

  useEffect(() => {
    socket?.on(GET_USERS, ({ users }) => {
      actions.loadUsers(users)
    })
  }, [socket])

  useEffect(() => {
    socket?.on(EMIT_MESSAGE, ({ message }) => {
      actions.addMessage(message)
      scrollToBottom('messages-list', 250)
    })
  }, [socket])

  return (
    <ChatContext.Provider
      value={{
        ...state,
        ...actions
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatState
