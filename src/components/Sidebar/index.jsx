import { SearchIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/layout'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import MiniCard from '../MiniCard'

const Sidebar = () => {
  return (
    <Flex p={5} as="aside" maxH="100vh" flexDir="column">
      <Heading fontWeight="thin" fontSize="2xl" mb={10}>
        Chat App
      </Heading>

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
