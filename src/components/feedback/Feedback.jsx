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

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.state.good + this.state.neutral + this.state.bad;
    if (sum === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / sum) * 100);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
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
          <li>Total: {total}</li>
          <li>Positive feedback: {positiveFeedback}%</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
