import React, { Component } from 'react';
import './css/bulma.min.css';

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://pporn.tv">PPORN.TV</a>
      </div>
    </nav>
  );
}

function WelcomeHeader() {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <p className="title is-unselectable is-2">Welcome to PPORN.TV</p>
        <p className="subtitle is-unselectable is-2">
          With
          <span role="img" aria-label="heart">❤️</span>
        </p>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="section">
      <div className="container">
        <p className="title is-3 has-text-centered">
          <span className="icon has-text-warning">
            <i className="fas fa-exclamation-triangle" />
          </span>
          Warning
        </p>
        <div className="box">
          <p className="is-size-4">
            {'This website contains material which may offend and may not be distributed,'
              + ' circulated, sold, hired, given, lent, shown, played or projected to a person'
              + ' under the age of 18 years.'}
          </p>
        </div>
      </div>
    </section>
  );
}

function ConfirmEnter() {
  return (
    <section>
      <div className="columns has-text-centered">
        <div className="column" />

        <div className="column">
          <a className="button is-primary is-large" href="https://hackertyper.net">
            I am over 18 years old
          </a>
        </div>

        <div className="column">
          <a className="button is-danger is-large" onClick="alert('Get out of here!')" role="button">
            I am under 18 years old
          </a>
        </div>

        <div className="column" />
      </div>
    </section>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <WelcomeHeader />
        <Disclaimer />
        <ConfirmEnter />
      </div>
    );
  }
}

export default App;
