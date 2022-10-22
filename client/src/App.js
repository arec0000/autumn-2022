import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./components/pages/auth/auth";
import Register from "./components/pages/register/register";
import Admin from "./components/pages/admin/admin";

import "./assets/style.scss";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
