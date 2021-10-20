import { useFormik } from 'formik'
import { Button } from '@chakra-ui/button'
import { useHistory } from 'react-router-dom'
import { Box, Center, Divider, Heading } from '@chakra-ui/layout'

import InputField from '../components/InputField'
import useCustomToast from '../hooks/useCustomToast'
import useFetchLazyQuery from '../hooks/useFetchLazyQuery'

const initialValues = { name: '', email: '', password: '' }

const Register = () => {
  const router = useHistory()
  const toast = useCustomToast()
  const [registerApi, { loading }] = useFetchLazyQuery({
    path: '/auth',
    method: 'PUT'
  })
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = await registerApi(values)
      if (!data.ok) return toast.error(data.msg)

      toast.success('Register success')
      router.push('/auth/login')
    }
  })

  return (
    <Center h="100vh" w="full">
      <Box w="90%" maxW={500}>
        <Heading mb={10} textAlign="center" fontSize="5xl">
          Register
        </Heading>

        <form onSubmit={formik.handleSubmit}>
          <InputField name="name" label="Name" formik={formik} />
          <InputField name="email" label="Email" formik={formik} />
          <InputField
            type="password"
            name="password"
            label="Password"
            formik={formik}
          />

          <Button
            isLoading={loading}
            colorScheme="primary"
            type="submit"
            w="full"
          >
            Sign Up
          </Button>
          <Divider my={5} />
          <Button
            w="full"
            type="button"
            variant="outline"
            colorScheme="primary"
            onClick={() => router.push('/auth/login')}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Center>
  )
}

export default Register
