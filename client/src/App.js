import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import useRequestAuthData from './services/useRequestAuthData'

import manageAccess from './manageAccess'
import Auth from './components/pages/auth/auth'
import Register from './components/pages/register/register'

import Spinner from './components/pages/shared/spinner/spinner'
import './assets/style.scss'

const App = () => {
    const [{token}] = useCookies('token')
    const [role, setRole] = useState("student")
    const request = useRequestAuthData()

    useEffect(() => {
        if (token) {
            const req = async () => {
                const fetchedRole = await request(token)
                setRole(fetchedRole)
            }
            req()
        }
    }, []) // eslint-disable-line

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/auth" element={<Auth setRole={setRole}/>}/>
                    <Route path="/register" element={<Register setRole={setRole}/>}/>
                    {token && !role ? (
                        <Route path="*" element={<Spinner/>}/>
                    ) : (
                        manageAccess(role)
                    )}
                </Routes>
            </Router>
        </div>
    )
}

export default App
