import Icon from '@chakra-ui/icon'
import { Input } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { IoMdSend } from 'react-icons/io'

const SendMessage = () => {
  return (
    <Flex>
      <Input _focus={{ borderColor: 'primary.500' }} />
      <IconButton ml={2} colorScheme="primary" icon={<Icon as={IoMdSend} />} />
    </Flex>
  )
}

export default SendMessage
