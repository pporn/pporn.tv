import React, { Component } from 'react';
import './css/bulma.min.css';

/*
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://pporn.tv">PPORN.TV</a>
            </div>
        </nav>
*/

class App extends Component {
  render() {
    return (
      <div>
       <nav className="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
              <a class="navbar-item" href="https://pporn.tv">PPORN.TV</a>
          </div>
        </nav>
        <section class="section">
          <div class="container has-text-centered">
            <p class="title is-unselectable is-2">Welcome to PPORN.TV</p>
            <p class="subtitle is-unselectable is-2">With ❤️</p>
          </div>
        </section>
       </div>
    );
  }
}

export default App;
