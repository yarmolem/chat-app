import { useEffect } from 'react'
import { Avatar } from '@chakra-ui/avatar'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout'

import useFetchQuery from '../hooks/useFetchQuery'
import SendMessage from '../components/SendMessage'
import useChatContext from '../hooks/useChatContext'
import MessagesList from '../components/MessagesList'
import { scrollToBottom } from '../utils/scrollToBottom'

const HallPage = ({ location }) => {
  const { users, setActiveChat, cleanChat, loadMessages } = useChatContext()
  const userData = useFetchQuery({ path: `/users/${location.state.uid}` })
  useFetchQuery({
    path: `/messages/${location.state.uid}`,
    onComplete: (data) => {
      loadMessages(data.messages)
      scrollToBottom('messages-list')
    }
  })

  useEffect(() => {
    setActiveChat(location.state.uid)
    return () => cleanChat()
  }, [location.state])

  useEffect(() => {
    userData.refetch()
  }, [users])

  const userPlaceholder = {
    name: 'Test Test',
    online: false
  }

  const user = userData.data ? userData.data.user : userPlaceholder

  return (
    <Container
      p={5}
      flex={1}
      h="full"
      display="flex"
      flexDir="column"
      maxW="container.md"
    >
      <Flex align="center" pb={3}>
        <Avatar mr={2} size="lg" name={user.name} />
        <Box>
          <Heading m={0} lineHeight="1.2em">
            {user.name}
          </Heading>
          <Text color={user.online ? 'green.500' : 'red.500'}>
            {user.online ? 'online' : 'offline'}
          </Text>
        </Box>
      </Flex>

      <Flex flex={1} flexDir="column">
        <Box flex={1} pos="relative">
          <MessagesList />
        </Box>

        <SendMessage />
      </Flex>
    </Container>
  )
}

export default HallPage
