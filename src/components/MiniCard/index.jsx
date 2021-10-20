import {
  Box,
  Center,
  Flex,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/layout'

import PhotoProfile from '../PhotoProfile'

const MiniCard = () => {
  return (
    <LinkBox w="full" display="flex">
      <PhotoProfile />
      <Box ml={5}>
        <LinkOverlay href="#">
          <Text>Jhon Doe</Text>
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
