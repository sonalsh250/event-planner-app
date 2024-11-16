import React from 'react';
import Header from './components/Header'; // Correct path to your Header component
import HeroSection from './components/HeroSection'; // Correct path to your HeroSection component
import BodyImage from './components/BodyImage';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />        
            <BodyImage />
            <HeroSection />   
            <Footer />   
        </div>
    );
}

export default App;

