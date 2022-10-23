import { useHttp } from '../hooks/httpRequest'

const apiBase = 'http://grtsk:5000/'

const useRequestAuthData = () => {
    const {request} = useHttp()
    return async (token) => {
        try {
            const res = await request(`${apiBase}my-role`, 'GET', null, {
                'Content-Type': 'application/json',
                'Authorization': token
            })
            return res.role
        } catch (e) {
            console.log(e)
        }
    }
}

export default useRequestAuthData
