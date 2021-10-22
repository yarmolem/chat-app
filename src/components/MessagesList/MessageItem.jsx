import { Flex, Text } from '@chakra-ui/layout'

const MessageItem = ({ children, isYou }) => {
  return (
    <Flex
      px={3}
      py={2}
      rounded="xl"
      w="max-content"
      flexDir="column"
      bg={isYou ? 'gray.700' : 'primary.800'}
      alignSelf={isYou ? 'flex-end' : 'flex-start'}
    >
      <Text>{children}</Text>
      <Text
        fontSize="small"
        color="gray.400"
        textAlign={isYou ? 'right' : 'left'}
      >
        09:15
      </Text>
    </Flex>
  )
}

export default MessageItem
