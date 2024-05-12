import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Contact from '../../Components/Contact/Contact';
import './Home.scss';

const Home = () => {
  return (
    <>
        <Header />
        <Banner />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default Home