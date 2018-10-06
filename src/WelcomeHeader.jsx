import React from 'react';
import './css/bulma.min.css';
import './css/fontawesome.min.css';

function WelcomeHeader() {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <p className="title is-unselectable is-2">Welcome to PPORN.TV</p>
        <p className="subtitle is-unselectable is-2">
          With
          <span role="img" aria-label="heart"> ❤️</span>
        </p>
      </div>
    </section>
  );
}

export default WelcomeHeader;
