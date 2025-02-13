import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
