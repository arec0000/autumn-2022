import { useCookies } from 'react-cookie'
import { useHttp } from '../hooks/httpRequest'

const apiBase = 'https://grtsk:5000/'

const useNews = () => {
    const [{token}] = useCookies('token')
    const {request} = useHttp()

    const createNews = async news => {
        const res = await request(`${apiBase}news`, 'POST', JSON.stringify(news), {
            'Content-Type': 'application/json',
            'Authorization': token
        })
        return res
    }

    const getNews = async () => {
        const res = await request(`${apiBase}news`)
        return res
    }

    return {createNews, getNews}
}

export default useNews
