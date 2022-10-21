import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/style.scss'
import SidePanel from './components/pages/sidePanel/sidePanel'
import UserNews from './components/pages/userNews/userNews'
import UserProfile from './components/pages/userProfile/userProfile'
import UserSchedule from './components/pages/userSchedule/userSchedule'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<SidePanel/>}>
                        <Route path='news' element={<UserNews/>}/>
                        <Route path='profile' element={<UserProfile/>}/>
                        <Route path='schedule' element={<UserSchedule/>}/>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
