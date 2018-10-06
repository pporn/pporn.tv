import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="content has-text-centered">
        <p>
          {'Powered by '}
          <a href="https://bulma.io">Bulma</a>
          {' and '}
          <a href="https://nodejs.org">Node.js</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
