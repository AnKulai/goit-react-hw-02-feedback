import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import PropTypes from 'prop-types';
import css from './Feedback.module.scss';

const Feedback = ({ state, onLeaveFeedback }) => {
  const options = Object.keys(state);
  return (
    <ul className={css.feedbackList}>
      {options.map(option => (
        <FeedbackOptions
          key={option}
          options={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </ul>
  );
};

export default Feedback;

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
