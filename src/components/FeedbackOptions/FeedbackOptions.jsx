import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <li>
      <button data-type={options} onClick={onLeaveFeedback}>
        {options}
      </button>
    </li>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
