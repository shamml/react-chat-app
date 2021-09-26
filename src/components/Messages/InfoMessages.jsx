import React from 'react';
import styles from './messages.module.css';
import PropTypes from 'prop-types'

function MessagesInfo({ content }) {
  return <div className={styles['info-message']}>{content}</div>;
}

MessagesInfo.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MessagesInfo;
