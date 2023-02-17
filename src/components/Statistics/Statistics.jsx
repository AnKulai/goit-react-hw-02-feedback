import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import css from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.statList}>
        {stateIsEmpty(total) ? (
          <Notification message="There is no feedback" />
        ) : (
          <>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total()} </li>
            <li>Positive feedback: {positivePercentage()}%</li>
          </>
        )}
      </ul>
    </>
  );
};

const stateIsEmpty = total => total() === 0;

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
