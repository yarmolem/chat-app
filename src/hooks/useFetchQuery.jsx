import { useCallback, useEffect, useState } from 'react'

const useFetchQuery = ({ url = '', method = 'GET', onError, onComplete }) => {
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

      const config = {}

      if (payload && method !== 'GET') {
        config.method = method
        config.body = JSON.stringify(payload)
        config.headers = { 'Content-Type': 'application/json' }
      }

      try {
        const res = await fetch(url)
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
    [handleError, method, onComplete, url]
  )

  useEffect(() => {
    if (url.trim() !== '') handleFetch()
  }, [url, handleFetch])

  return { loading, data, refetch: handleFetch }
}

export default useFetchQuery
