import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import Main from './pages/Main/Main';
import AppLayout from "./components/AppLayout/AppLayout";
import Menu from "./pages/Menu/Menu";
import {foodMenuData} from './data/foodMenuData'
import {drinksMenuData} from './data/drinksMenuData'

const App: React.FC = () => (
    <div className="app">
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/food-menu" element={<Menu menuData={foodMenuData}
                                                            bgClassName="food-menu-bg-wrapper"
                                                            title="Food Menu"/>}/>
                    <Route path="/drinks-menu" element={<Menu menuData={drinksMenuData}
                                                              bgClassName="drinks-menu-bg-wrapper"
                                                              title="Drinks Menu"/>}/>
                </Routes>
            </AppLayout>
        </Router>
    </div>
);

export default App;
