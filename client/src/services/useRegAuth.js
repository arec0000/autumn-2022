import { useHttp } from '../hooks/httpRequest'

const apiBase = 'http://localhost:5000/'

const useRegAuth = (route) => {
    const {request: req, error, clearError} = useHttp()

    const request = async (data) => {
        clearError()
        const res = await req(`${apiBase}${route}`, 'POST', JSON.stringify(data), {
            'Content-Type': 'application/json'
        })
        return res
    }

    return {request, error: error.message}
}

export default useRegAuth
