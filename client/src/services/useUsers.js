import { useCookies } from 'react-cookie'
import { useHttp } from '../hooks/httpRequest'

const apiBase = 'http://grtsk:5000/'

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

    const getUsers = async data => {
        const res = await request(`${apiBase}users`, 'GET', null, {
            'Content-Type': 'application/json',
            'Authorization': token
        })
        return res
    }

    const deleteUser = async id => {
        const res = await request(`${apiBase}user?id=${id}`, 'DELETE', null, {
            'Content-Type': 'application/json',
            'Authorization': token
        })
        return res
    }

    return {createUser, getUsers, deleteUser}
}

export default useNews
