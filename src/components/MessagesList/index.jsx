import { Stack } from '@chakra-ui/layout'
import MessageItem from './MessageItem'

const MessagesList = () => {
  return (
    <Stack
      py={5}
      top={0}
      left={0}
      w="full"
      h="full"
      maxW="full"
      pos="absolute"
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
      <MessageItem>Hola como estas ?</MessageItem>
      <MessageItem isYou>Hola, bien y tu como andas ?</MessageItem>
    </Stack>
  )
}

export default MessagesList
