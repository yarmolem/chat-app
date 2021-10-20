import { useFormik } from 'formik'
import { Button } from '@chakra-ui/button'
import { useHistory } from 'react-router-dom'
import { Box, Center, Divider, Heading } from '@chakra-ui/layout'

import InputField from '../components/InputField'
import useAuthContext from '../hooks/useAuthContext'
import useCustomToast from '../hooks/useCustomToast'
import { loginSchema } from '../validation/loginSchema'
import useFetchLazyQuery from '../hooks/useFetchLazyQuery'

const initialValues = { email: '', password: '' }

const Login = () => {
  const router = useHistory()
  const toast = useCustomToast()
  const { loginAction } = useAuthContext()
  const [loginApi, { loading }] = useFetchLazyQuery({
    path: '/auth',
    method: 'POST'
  })

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const data = await loginApi(values)
      if (!data.ok) return toast.error(data.msg)

      toast.success('Welcome')
      const { user, token } = data
      loginAction(user, token)
    }
  })

  return (
    <Center h="100vh" w="full">
      <Box w="90%" maxW={500}>
        <Heading mb={10} textAlign="center" fontSize="5xl">
          Login
        </Heading>

        <form onSubmit={formik.handleSubmit}>
          <InputField name="email" label="Email" formik={formik} />
          <InputField
            type="password"
            name="password"
            label="Password"
            formik={formik}
          />

          <Button
            mt={5}
            w="full"
            type="submit"
            isLoading={loading}
            colorScheme="primary"
          >
            Sign In
          </Button>
          <Divider my={5} />
          <Button
            w="full"
            type="button"
            variant="outline"
            colorScheme="primary"
            onClick={() => router.push('/auth/register')}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Center>
  )
}

export default Login
