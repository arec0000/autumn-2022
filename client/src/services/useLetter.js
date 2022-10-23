import { useCookies } from 'react-cookie'
import { useHttp } from '../hooks/httpRequest'

const apiBase = 'http://localhost:5000/'

const useLetter = () => {
    const [{token}] = useCookies('token')
    const {request} = useHttp()

    const send = async text => {
        const res = await request(`${apiBase}rector`, 'POST', JSON.stringify(text), {
            'Content-Type': 'application/json',
            'Authorization': token
        })
        return res
    }

    return send
}

export default useLetter
