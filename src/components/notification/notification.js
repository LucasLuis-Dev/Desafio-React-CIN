import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './notification.css';

const Notification = ({ message, success, keyProp }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [message, keyProp]);

  const notificationClasses = `notification ${success ? 'success' : 'error'} ${visible ? 'visible' : ''}`;

  return (
    <div className={notificationClasses}>
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  keyProp: PropTypes.any.isRequired,
};

export default Notification;
