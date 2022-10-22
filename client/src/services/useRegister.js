import { useState } from 'react'
import { useHttp } from '../hooks/httpRequest'

const apiBase = 'localhost:5000/'

const useRegister = () => {
    const [error, setError] = useState(null)
    const {request: req, error: err} = useHttp()
    const request = async (data) => {
        try {
            const res = await req(`${apiBase}register`, 'POST', data, {
                'Content-Type': 'application/json'
            })
            if (err) {
                setError(res.error)
            }
            return res
        } catch (e) {
            console.log(e)
        }
    }
    return {request, error}
}

export default useRegister
