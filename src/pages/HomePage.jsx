import { Box, Center, Heading, Text } from '@chakra-ui/layout'

const HomePage = () => {
  return (
    <Center h="full">
      <Box bg="primary.500" px={5} py={3} rounded="2xl" color="gray.800">
        <Heading textAlign="center" mb={1}>
          Welcome
        </Heading>
        <Text textAlign="center">Select a chat to start messaging</Text>
      </Box>
    </Center>
  )
}

export default HomePage
