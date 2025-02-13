import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
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

export default App;
