import { SearchIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'

import MiniCard from '../MiniCard'
import LogoutButton from '../LogoutButton'
import useAuthContext from '../../hooks/useAuthContext'

const Sidebar = () => {
  const { name } = useAuthContext()

  return (
    <Flex p={5} as="aside" maxH="100vh" flexDir="column">
      <Flex justify="space-between" align="center" mb={10}>
        <Box>
          <Heading fontWeight="thin" fontSize="2xl">
            Chat App
          </Heading>
          <Text color="gray.500">{name}</Text>
        </Box>

        <LogoutButton />
      </Flex>

      <InputGroup size="lg" mb={5}>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          rounded="2xl"
          variant="filled"
          placeholder="Search"
          _focus={{ borderColor: 'primary.500' }}
        />
      </InputGroup>

      <Box flex={1} maxH="full" overflowY="auto">
        <Stack
          px={4}
          py={6}
          spacing={6}
          rounded="2xl"
          bg="gray.700"
          divider={<Divider />}
        >
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </Stack>
      </Box>
    </Flex>
  )
}

export default Sidebar
