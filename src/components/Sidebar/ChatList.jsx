import { Divider, Stack } from '@chakra-ui/layout'

import MiniCard from '../MiniCard'
import useChatContext from '../../hooks/useChatContext'
import useAuthContext from '../../hooks/useAuthContext'

const ChatList = () => {
  const { uid } = useAuthContext()
  const { users } = useChatContext()

  return (
    <Stack
      px={4}
      py={6}
      spacing={6}
      rounded="2xl"
      bg="gray.700"
      divider={<Divider />}
    >
      {users
        .filter((u) => u.uid !== uid)
        .map((user) => (
          <MiniCard key={user.uid} user={user} />
        ))}
    </Stack>
  )
}

export default ChatList
