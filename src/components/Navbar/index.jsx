import { IconButton } from '@chakra-ui/button'
import { BellIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, Text } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'

const NavbarItem = ({ label, isActive, to = '/' }) => (
  <Link to={to}>
    <Box
      pb={1}
      cursor="pointer"
      borderWidth="thin"
      borderColor="transparent"
      transition="border 0.3s ease"
      _hover={{ borderBottomColor: 'primary.500' }}
      borderBottomColor={isActive ? 'primary.500' : ''}
    >
      <Text>{label}</Text>
    </Box>
  </Link>
)

const Navbar = () => {
  return (
    <Flex as="nav" p={5}>
      <HStack ml="auto" spacing={4}>
        <NavbarItem label="HOME" />
        <NavbarItem label="CHAT" isActive />
        <NavbarItem label="CONTACTS" />
      </HStack>
      <HStack ml={2}>
        <IconButton
          variant="ghost"
          colorScheme="primary"
          icon={<SearchIcon />}
        />
        <IconButton colorScheme="primary" variant="ghost" icon={<BellIcon />} />
      </HStack>
    </Flex>
  )
}

export default Navbar
