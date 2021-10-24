import {
  Box,
  Center,
  Flex,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/layout'
import { Link } from 'react-router-dom'

import PhotoProfile from '../PhotoProfile'

const MiniCard = ({ user }) => {
  return (
    <LinkBox w="full" display="flex">
      <PhotoProfile online={user.online} name={user.name} />
      <Box ml={5}>
        <LinkOverlay
          as={Link}
          to={{ pathname: `/hall/${user.uid}`, state: user }}
        >
          <Text>{user.name}</Text>
        </LinkOverlay>
        <Text as="small" color="gray.500">
          Hi There, How are you?
        </Text>
      </Box>
      <Flex
        flex={1}
        flexDir="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Text textAlign="right" fontSize="sm">
          09:00
        </Text>

        <Center alignSelf="" w={5} h={5} rounded="full" bg="primary.500">
          <Text
            as="span"
            fontSize="small"
            color="gray.800"
            fontWeight="semibold"
          >
            5
          </Text>
        </Center>
      </Flex>
    </LinkBox>
  )
}

export default MiniCard
