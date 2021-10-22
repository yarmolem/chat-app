import Icon from '@chakra-ui/icon'
import { FiLogOut } from 'react-icons/fi'
import { Button } from '@chakra-ui/button'

import useAuthContext from '../../hooks/useAuthContext'

const LogoutButton = () => {
  const { logoutAction } = useAuthContext()

  return (
    <Button
      variant="outline"
      colorScheme="red"
      onClick={logoutAction}
      leftIcon={<Icon as={FiLogOut} />}
    >
      Salir
    </Button>
  )
}

export default LogoutButton
