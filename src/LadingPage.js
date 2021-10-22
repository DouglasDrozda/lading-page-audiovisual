import React from 'react';
import About from './components/About';

import Header from './components/Header';
import Services from './components/Services';

function LadingPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
      </main>
    </>
  );
}

export default LadingPage;
