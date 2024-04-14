import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Main from './pages/Main/Main';
import AppLayout from "./components/AppLayout/AppLayout";
import Contact from "./pages/Contact/Contact";
// import Menu from './pages/Menu';
// import About from './pages/About';

const App: React.FC = () => (
    <div className="app">
    <Router>
        <AppLayout>
        <Routes>
            <Route path="/" element={<Main/>} />
            {/*<Route path="/menu" element={<Menu />} />*/}
            {/*<Route path="/about" element={<About />} />*/}
        </Routes>
        </AppLayout>
    </Router>
    </div>
);

export default App;
