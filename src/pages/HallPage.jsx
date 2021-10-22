import { Avatar } from '@chakra-ui/avatar'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout'

import SendMessage from '../components/SendMessage'
import MessagesList from '../components/MessagesList'

const HallPage = () => {
  return (
    <Container
      p={5}
      flex={1}
      h="full"
      display="flex"
      flexDir="column"
      maxW="container.md"
    >
      <Flex align="center">
        <Avatar
          size="lg"
          mr={2}
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
        />
        <Box>
          <Heading m={0} lineHeight="1em">
            Jhon Doe
          </Heading>
          <Text color="green.500">online</Text>
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
