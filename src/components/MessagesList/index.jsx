import { Stack } from '@chakra-ui/layout'
import useAuthContext from '../../hooks/useAuthContext'
import useChatContext from '../../hooks/useChatContext'
import MessageItem from './MessageItem'

const MessagesList = () => {
  const { uid } = useAuthContext()
  const { messages } = useChatContext()

  return (
    <Stack
      py={5}
      top={0}
      left={0}
      w="full"
      h="full"
      maxW="full"
      pos="absolute"
      id="messages-list"
      overflowY="scroll"
      pr={2}
      sx={{
        '&::-webkit-scrollbar': {
          w: 2
        },
        '&::-webkit-scrollbar-track': {
          shadow: 'lg'
        },
        '&::-webkit-scrollbar-thumb': {
          bg: 'gray.700'
        }
      }}
    >
      {messages.map(({ from, to, message, _id, createdAt }) => (
        <MessageItem
          date={createdAt}
          isYou={from === uid}
          key={`message-${_id}`}
        >
          {message}
        </MessageItem>
      ))}
    </Stack>
  )
}

export default MessagesList
