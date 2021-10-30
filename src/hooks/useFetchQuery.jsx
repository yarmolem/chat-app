import { useCallback, useEffect, useState } from 'react'

const useFetchQuery = ({
  // url = 'http://localhost:8080/api',
  url = 'https://yarmo-chat-server.herokuapp.com/api',
  path = '',
  method = 'GET',
  onError,
  onComplete
}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleError = useCallback(
    (err) => {
      setLoading(false)
      if (typeof onError === 'function') {
        onError(err)
      } else {
        console.log(err)
      }
    },
    [onError]
  )

  const handleFetch = useCallback(
    async (payload) => {
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
      } catch (error) {
        handleError(error)
      }

      setLoading(false)
    },
    [handleError, method, onComplete, url, path]
  )

  useEffect(() => {
    if (url.trim() !== '') handleFetch()
  }, [url, path])

  return { loading, data, refetch: handleFetch }
}

export default useFetchQuery
