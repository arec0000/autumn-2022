import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setLoading(true)
        try {
            const res = await fetch(url, {method, body, headers})
            const data = await res.json()
            if (!res.ok) throw new Error(data.error || `Could not fetch ${url}, status: ${res.status}`)
            setLoading(false)
            return data
        } catch(err) {
            setLoading(false)
            setError(err)
            throw err
        }
    }, [])

    const clearError = useCallback(() => setError(false), [])

    return {loading, error, request, clearError}
}
