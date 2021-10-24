import { Flex, Text } from '@chakra-ui/layout'
import { formatHour } from '../../utils/formatDate'

const MessageItem = ({ children, isYou, date }) => {
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
        {formatHour(date)}
      </Text>
    </Flex>
  )
}

export default MessageItem
