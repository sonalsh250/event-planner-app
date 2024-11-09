// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import EventList from './components/EventList';

// const App = () => {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<HeroSection />} />
//                 <Route path="/events" element={<EventList />} />
//                 {/* Add more routes as needed */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import React from 'react';
import Header from './components/Header'; // Correct path to your Header component
import HeroSection from './components/HeroSection'; // Correct path to your HeroSection component
import BodyImage from './components/BodyImage';

const App = () => {
    return (
        <div>
            <Header />        {/* This will render the Header */}
            <BodyImage />
            <HeroSection />   {/* This will render the HeroSection */}
        </div>
    );
}

export default App;

