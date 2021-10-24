import { useContext, useState } from 'react'

import Icon from '@chakra-ui/icon'
import { Input } from '@chakra-ui/input'
import { Flex } from '@chakra-ui/layout'
import { IoMdSend } from 'react-icons/io'
import { IconButton } from '@chakra-ui/button'
import useAuthContext from '../../hooks/useAuthContext'
import useChatContext from '../../hooks/useChatContext'
import { SocketContext } from '../../context/socket/SocketState'
import { EMIT_MESSAGE } from '../../types/sockets'

const SendMessage = () => {
  const [msg, setMsg] = useState('')

  const { uid } = useAuthContext()
  const { activeChat } = useChatContext()
  const { socket } = useContext(SocketContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (msg.trim() === '') return

    setMsg('')

    socket?.emit(EMIT_MESSAGE, {
      from: uid,
      message: msg,
      to: activeChat
    })
  }

  return (
    <Flex as="form" onSubmit={handleSubmit}>
      <Input
        value={msg}
        _focus={{ borderColor: 'primary.500' }}
        onChange={({ target }) => setMsg(target.value)}
      />
      <IconButton ml={2} colorScheme="primary" icon={<Icon as={IoMdSend} />} />
    </Flex>
  )
}

export default SendMessage
