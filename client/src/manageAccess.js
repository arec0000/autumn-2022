import { Route, Navigate } from 'react-router-dom'
import Main from './components/pages/main/main'
import UserNews from './components/pages/userNews/userNews'
import UserProfile from './components/pages/userProfile/userProfile'
import UserSchedule from './components/pages/userSchedule/userSchedule'

const manageAccess = (role) => {
    switch (role) {
        case 'student':
            return (
                <Route path="/" element={<Main/>}>
                    <Route path='news' element={<UserNews/>}/>
                    <Route path='profile' element={<UserProfile/>}/>
                    <Route path='schedule' element={<UserSchedule/>}/>
                </Route>
            )
        case 'teacher':
            return (
                null
            )
        case 'employee':
            return (
                null
            )
        case 'admin':
            return (
                null
            )
        default:
            return <Route path="*" element={<Navigate to="auth"/>}/>
    }
}

export default manageAccess
