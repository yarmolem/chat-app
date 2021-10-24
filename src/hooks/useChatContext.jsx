import { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatState'

const useChatContext = () => {
  return useContext(ChatContext)
}

export default useChatContext
