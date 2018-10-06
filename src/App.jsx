import React from 'react';
import NavBar from './NavBar';
import WelcomeHeader from './WelcomeHeader';
import WarningSection from './WarningSection';
import Footer from './Footer';

import './css/bulma.min.css';
import './css/fontawesome.min.css';
import './css/style.css';

function App() {
  return (
    <div className="Site">
      <div className="Site-content">
        <NavBar />
        <WelcomeHeader />
        <WarningSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
