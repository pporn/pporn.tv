import React, { Component } from 'react';

import './css/bulma.min.css';
import './css/fontawesome.min.css';

const swal = require('sweetalert');

class EnterConfirmation extends Component {
  constructor() {
    super();

    this.prompt = 'Why are you here?';
    this.showAlert = this.showAlert.bind(this);
  }

  showAlert() {
    swal({
      title: 'Huh?',
      text: this.prompt,
      icon: 'error',
    });
  }

  render() {
    return (
      <section>
        <div className="columns has-text-centered">
          <div className="column" />

          <div className="column">
            <a
              className="button is-primary is-large"
              href="https://www.youtube.com"
            >
              I am over 18 years old
            </a>
          </div>

          <div className="column">
            <button
              className="button is-danger is-large"
              onClick={this.showAlert}
              type="button"
            >
              I am under 18 years old
            </button>
          </div>

          <div className="column" />
        </div>
      </section>
    );
  }
}

export default EnterConfirmation;
