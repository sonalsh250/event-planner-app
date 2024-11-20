import React from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services'

// const App = () => {
//     return (
//         <div>
//             <Header />        
//             <BodyImage />
//             <HeroSection />   
//             <Footer />   
//             {/* <Home /> */}
//         </div>
//     );
// }
// export default App;

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/services' element={<Services/>} />
            </Routes>
        </BrowserRouter>
        </>
    );
};
export default App;