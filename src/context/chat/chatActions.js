import { initialState } from './ChatState'
import { chatTypes as types } from './chatTypes'

export const chatActions = (state = initialState, dispatch) => {
  const cleanChat = () => {
    dispatch({ type: types.CLEAN_CHAT })
  }
  const setActiveChat = (uid) => {
    dispatch({ type: types.SET_ACTIVE_CHAT, payload: uid })
  }
  const loadUsers = (users) => {
    dispatch({ type: types.LOAD_USERS, payload: users })
  }
  const loadMessages = (payload) => {
    dispatch({ type: types.LOAD_MESSAGES, payload })
  }
  const addMessage = (msg) => {
    dispatch({ type: types.ADD_MESSAGE, payload: msg })
  }

  const purgeChatState = () => {
    dispatch({ type: types.PURGE_CHAT_STATE })
  }

  return {
    loadUsers,
    cleanChat,
    addMessage,
    loadMessages,
    setActiveChat,
    purgeChatState
  }
}
