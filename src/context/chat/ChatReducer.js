import { initialState } from './ChatState'
import { chatTypes as types } from './chatTypes'

const ChatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOAD_USERS:
      return {
        ...state,
        users: payload
      }

    case types.SET_ACTIVE_CHAT:
      if (state.activeChat === payload) return state

      return {
        ...state,
        messages: [],
        activeChat: payload
      }

    case types.CLEAN_CHAT:
      return {
        ...state,
        messages: [],
        activeChat: null
      }

    case types.ADD_MESSAGE:
      if (
        state.activeChat === payload.from ||
        state.activeChat === payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, payload]
        }
      } else {
        return state
      }

    case types.LOAD_MESSAGES:
      return {
        ...state,
        messages: payload
      }

    case types.PURGE_CHAT_STATE:
      return { ...initialState }

    default:
      return state
  }
}

export default ChatReducer
