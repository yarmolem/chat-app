import Icon from '@chakra-ui/icon'
import { FiLogOut } from 'react-icons/fi'
import { Button } from '@chakra-ui/button'

import useAuthContext from '../../hooks/useAuthContext'
import useChatContext from '../../hooks/useChatContext'

const LogoutButton = () => {
  const { logoutAction } = useAuthContext()
  const { purgeChatState } = useChatContext()

  const handleLogout = () => {
    logoutAction()
    purgeChatState()
  }

  return (
    <Button
      variant="outline"
      colorScheme="red"
      onClick={handleLogout}
      leftIcon={<Icon as={FiLogOut} />}
    >
      Salir
    </Button>
  )
}

export default LogoutButton
