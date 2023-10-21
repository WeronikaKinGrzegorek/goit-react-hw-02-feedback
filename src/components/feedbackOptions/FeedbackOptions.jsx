import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.button_list}>
    <button
      type="button"
      name="good"
      onClick={onLeaveFeedback}
      className={css.button}
    >
      Good
    </button>
    <button
      type="button"
      name="neutral"
      onClick={onLeaveFeedback}
      className={css.button}
    >
      Neutral
    </button>
    <button
      type="button"
      name="bad"
      onClick={onLeaveFeedback}
      className={css.button}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
