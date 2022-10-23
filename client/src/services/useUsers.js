import { useCookies } from 'react-cookie'
import { useHttp } from '../hooks/httpRequest'

const apiBase = 'http://localhost:5000/'

const useNews = () => {
    const [{token}] = useCookies('token')
    const {request} = useHttp()

    const createUser = async data => {
        const res = await request(`${apiBase}create-user`, 'POST', JSON.stringify(data), {
            'Content-Type': 'application/json',
            'Authorization': token
        })
        return res
    }

    // const getNews = async () => {
    //     const res = await request(`${apiBase}news`)
    //     return res
    // }

    return {createUser}
}

export default useNews
