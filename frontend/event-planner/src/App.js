import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/Header'

const App = () => {
    return (
        <>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
};
export default App;