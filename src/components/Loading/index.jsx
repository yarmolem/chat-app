import { Spinner } from '@chakra-ui/spinner'
import { Center, Flex, Heading } from '@chakra-ui/layout'

const Loading = () => {
  return (
    <Center h="100vh">
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        <Spinner />
        <Heading>Loading...</Heading>
      </Flex>
    </Center>
  )
}

export default Loading
