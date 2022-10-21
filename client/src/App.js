import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Auth from './components/pages/auth/auth'
import Register from './components/pages/register/register'

import './assets/style.scss'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
