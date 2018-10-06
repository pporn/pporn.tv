import React, { Component } from 'react';

class Time extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { date } = this.state;

    return (
      <time>
        {date.toLocaleTimeString()}
      </time>
    );
  }
}

function Footer() {
  return (
    <footer className="footer">
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
          {'. '}
        </p>
      </div>
      <div className="content has-text-centered">
        <Time />
      </div>
    </footer>
  );
}

export default Footer;
