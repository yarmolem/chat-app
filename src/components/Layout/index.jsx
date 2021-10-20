import { Box, Flex, SimpleGrid } from '@chakra-ui/layout'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Layout = ({ children }) => {
  return (
    <SimpleGrid templateColumns="350px minmax(0, 1fr)">
      <Sidebar />
      <Flex flexDir="column" h="100vh">
        <Navbar />
        <Box flex={1} as="main">
          {children}
        </Box>
      </Flex>
    </SimpleGrid>
  )
}

export default Layout
