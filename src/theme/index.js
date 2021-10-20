import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    50: '#d9fffa',
    100: '#adfff1',
    200: '#7dffe7',
    300: '#4dffdd',
    400: '#25ffd4',
    500: '#13e6ba',
    600: '#00b391',
    700: '#008068',
    800: '#004e3e',
    900: '#001c15'
  }
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  fonts,
  config,
  colors
})

export default theme
