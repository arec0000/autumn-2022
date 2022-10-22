import { useState } from 'react'
import { useHttp } from '../hooks/httpRequest'

const apiBase = 'http://localhost:5000/'

const useRegAuth = (route) => {
    const [error, setError] = useState(null)
    const {request: req, error: err, clearError} = useHttp()

    const request = async (data) => {
        setError(null)
        clearError()
        try {
            const res = await req(`${apiBase}${route}`, 'POST', data, {
                'Content-Type': 'application/json'
            })
            if (err) {
                setError(res.error || err.message)
            }
            return res
        } catch (e) {
            if (e) {
                setError(e.message)
            }
        }

    }

    return {request, error}
}

export default useRegAuth
