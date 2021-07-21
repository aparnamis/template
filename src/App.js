import React from 'react'
import './App.css';

import NavBar from './component/Navbar'
import HeroSection from './component/Herosection'
import FeatureSection from './component/Featuresection'
import CardSection from './component/cardsection'
import FooterSection from './component/Footersection'

function App() {
  return (
    
    <div>
        <NavBar />
        
        <FeatureSection />
        <HeroSection />
        <CardSection />
        <FooterSection />

    
    </div>
  );
  
}

export default App;