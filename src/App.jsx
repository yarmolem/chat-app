import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import moment from 'moment'

import theme from './theme'
import RootRouter from './router/RootRouter'
import AuthState from './context/auth/AuthState'
import ChatState from './context/chat/ChatState'
import SocketState from './context/socket/SocketState'

import 'moment/locale/es'

moment.locale('es')

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthState>
          <SocketState>
            <ChatState>
              <RootRouter />
            </ChatState>
          </SocketState>
        </AuthState>
      </Router>
    </ChakraProvider>
  )
}

export default App
