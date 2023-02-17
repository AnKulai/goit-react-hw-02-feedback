import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <li>{message}</li>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
