import React from 'react';
import './App.css';
import { Contact } from './components/Contact/Contact';
import { CTA } from './components/CTA/CTA';
import { Feature } from './components/Feature/Feature';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Partners } from './components/Partners/Partners';
import { Pricing } from './components/Pricing/Pricing';
import { Testimonials } from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Feature/>
      <CTA/>
      <Partners/>
      <Testimonials/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
