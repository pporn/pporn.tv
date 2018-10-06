import React from 'react';

import './css/bulma.min.css';
import './css/fontawesome.min.css';

function Disclaimer() {
  return (
    <section className="section">
      <div className="container">
        <p className="title is-3 has-text-centered is-unselectable">
          <span className="icon has-text-warning">
            <i className="fas fa-exclamation-triangle" />
          </span>
          {' Warning'}
        </p>

        <div className="box">
          <p className="is-size-4 is-unselectable">
            {'This website contains material which may offend and may not be distributed,'
              + ' circulated, sold, hired, given, lent, shown, played or projected to a person'
              + ' under the age of 18 years.'}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;
