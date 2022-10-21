import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/style.scss'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<div>test</div>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
