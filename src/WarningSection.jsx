import React from 'react';
import Disclaimer from './Disclaimer';
import EnterConfirmation from './EnterConfirmation';

import './css/bulma.min.css';
import './css/fontawesome.min.css';

function WarningSection() {
  return (
    <div>
      <Disclaimer />
      <EnterConfirmation />
    </div>
  );
}

export default WarningSection;
