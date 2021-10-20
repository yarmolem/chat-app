import { Box } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'

const PhotoProfile = ({ online }) => {
  return (
    <Box pos="relative">
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Box
        w={3}
        h={3}
        right={0}
        bottom={0}
        pos="absolute"
        rounded="full"
        bg={online ? 'green' : 'red.500'}
      />
    </Box>
  )
}

export default PhotoProfile
