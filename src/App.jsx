import React from 'react';
import NavBar from './NavBar';
import WelcomeHeader from './WelcomeHeader';
import WarningSection from './WarningSection';

import './css/bulma.min.css';
import './css/fontawesome.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <WelcomeHeader />
      <WarningSection />
    </div>
  );
}

export default App;
