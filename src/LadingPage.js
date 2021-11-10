import React from 'react';
import About from './components/About';

import Header from './components/Header';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function LadingPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default LadingPage;
