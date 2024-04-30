import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./App.css";
import {foodMenuData} from './data/foodMenuData'
import {drinksMenuData} from './data/drinksMenuData'
import {Main, AppLayout, Menu, GiftCards, Reservations} from './pages';
import {ScrollToTop} from './components';
const App: React.FC = () => (
    <div className="app">
        <Router>
            <ScrollToTop />
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/food-menu" element={<Menu menuData={foodMenuData}
                                                            bgClassName="food-menu-bg-wrapper"
                                                            title="Food Menu"/>}/>
                    <Route path="/drinks-menu" element={<Menu menuData={drinksMenuData}
                                                              bgClassName="drinks-menu-bg-wrapper"
                                                              title="Drinks Menu"/>}/>
                    <Route path="/gift-card" element={<GiftCards/>}/>
                    <Route path="/reservations" element={<Reservations/>}/>
                </Routes>
            </AppLayout>
        </Router>
    </div>
);

export default App;
