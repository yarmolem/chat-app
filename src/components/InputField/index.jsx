import { useState } from 'react'

import { Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { ViewIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import {
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/form-control'

const InputField = ({
  name = '',
  label = '',
  type = 'text',
  formik: { values, errors, touched, handleBlur, handleChange }
}) => {
  const [showPass, setShowPass] = useState(false)

  const renderTogglePass = () => (
    <IconButton
      right={0}
      bottom={0}
      pos="absolute"
      variant="solid"
      bg="transparent"
      icon={<ViewIcon />}
      aria-label="toggle password"
      onClick={() => setShowPass((s) => !s)}
    />
  )

  const handleLabel = () => {
    const active = { left: 0, bottom: 6 }
    const inactive = { left: 4, bottom: 0 }
    const isEmpty = values[name].trim() === ''

    return isEmpty ? inactive : active
  }

  const hasError = errors[name] && touched[name]

  return (
    <Box h={50} mb={hasError ? 10 : 5}>
      <FormControl id={name} isInvalid={hasError}>
        <Box
          pos="relative"
          transition="all 0.3s ease"
          sx={{
            'input:focus + label': { left: 0, bottom: 6 },
            'input:placeholder-shown + label': { left: 0, bottom: 6 }
          }}
        >
          <Input
            name={name}
            paddingLeft={4}
            variant="flushed"
            fontWeight="light"
            autoComplete="off"
            onBlur={handleBlur}
            value={values[name]}
            onChange={handleChange}
            type={showPass ? 'text' : type}
            _focus={{ borderColor: 'primary.500' }}
          />
          <FormLabel
            pos="absolute"
            color="gray.500"
            transition="all 0.3s ease"
            {...handleLabel()}
          >
            {label}
          </FormLabel>
          {type === 'password' ? renderTogglePass() : null}
        </Box>
        <FormErrorMessage>{errors[name]}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}

export default InputField
