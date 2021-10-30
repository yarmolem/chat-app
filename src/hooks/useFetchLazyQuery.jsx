import { useState } from 'react'

const useFetchLazyQuery = ({
  // url = 'http://localhost:8080/api',
  url = 'https://yarmo-chat-server.herokuapp.com/api',
  path = '',
  method = 'GET',
  onError,
  onComplete
}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleError = (err) => {
    setLoading(false)
    if (typeof onError === 'function') {
      onError(err)
    } else {
      console.log(err)
    }
  }

  const handleFetch = async (payload) => {
    setLoading(true)

    const config = {
      headers: { 'x-token': localStorage.getItem('token') ?? '' }
    }

    if (payload && method !== 'GET') {
      config.method = method
      config.body = JSON.stringify(payload)
      config.headers = {
        ...config.headers,
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await fetch(url + path, config)
      const data = await res.json()
      setData(data)
      if (typeof onComplete === 'function') {
        onComplete(data)
      }
      setLoading(false)
      return data
    } catch (error) {
      handleError(error)
    }
  }

  return [handleFetch, { loading, data }]
}

export default useFetchLazyQuery
