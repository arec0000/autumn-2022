import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Auth from './components/pages/auth/auth'
import Register from './components/pages/register/register'

import './assets/style.scss'
import Main from './components/pages/main/main'
import UserNews from './components/pages/userNews/userNews'
import UserProfile from './components/pages/userProfile/userProfile'
import UserSchedule from './components/pages/userSchedule/userSchedule'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/register" element={<Register/>}/>

                    <Route path="/" element={<Main/>}>
                        <Route path='news' element={<UserNews/>}/>
                        <Route path='profile' element={<UserProfile/>}/>
                        <Route path='schedule' element={<UserSchedule/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
