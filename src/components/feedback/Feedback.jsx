import React, { Component } from 'react';
import css from './feedback.module.css';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  // static defaultProps = {};

  // static propTypes = {};

  clickGood = () => {
    this.setState(state => {
      return {
        good: state.good + 1,
      };
    });
  };

  clickNeutral = () => {
    this.setState(state => {
      return {
        neutral: state.neutral + 1,
      };
    });
  };

  clickBad = () => {
    this.setState(state => {
      return {
        bad: state.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.container}>
        <h1 className={css.title}>Please leave feedback</h1>
        <div className={css.button_list}>
          <button
            type="button"
            name="good"
            onClick={this.clickGood}
            className={css.button}
          >
            Good
          </button>
          <button
            type="button"
            name="neutral"
            onClick={this.clickNeutral}
            className={css.button}
          >
            Neutral
          </button>
          <button
            type="button"
            name="bad"
            onClick={this.clickBad}
            className={css.button}
          >
            Bad
          </button>
        </div>
        <h2 className={css.stats_title}>Statistics</h2>
        <ul className={css.stats}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
