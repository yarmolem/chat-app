import { useToast } from '@chakra-ui/toast'

const useCustomToast = () => {
  const toast = useToast()

  const error = (msg) => {
    toast({
      duration: 9000,
      title: 'Error.',
      status: 'error',
      isClosable: true,
      description: msg,
      position: 'top-right'
    })
  }

  const success = (msg) => {
    toast({
      duration: 9000,
      description: msg,
      isClosable: true,
      status: 'success',
      title: 'Success.',
      position: 'top-right'
    })
  }

  return { error, success }
}

export default useCustomToast
