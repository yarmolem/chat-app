import { Box } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

const PhotoProfile = ({ online }) => {
  return (
    <Box pos="relative">
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Box
        w={5}
        h={5}
        right={-1}
        bottom={-1}
        pos="absolute"
        rounded="full"
        borderWidth={4}
        borderColor="gray.700"
        bg={online ? 'green' : 'red.500'}
      />
    </Box>
  )
}

export default PhotoProfile
