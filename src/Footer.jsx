import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="content has-text-centered">
        <p>
          &copy; 2018
          {' '}
          <a href="https://www.github.com/pporn/pporn.tv">pporn.tv</a>
          {'. Powered by '}
          <a href="https://bulma.io">Bulma</a>
          {', '}
          <a href="https://reactjs.org">React</a>
          {' and '}
          <a href="https://nodejs.org">Node.js</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
