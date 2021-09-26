import React from 'react';
import styles from './avatar.module.css';
import PropTypes from 'prop-types';

function Avatar({ fullname, size, online }) {
  return (
    <div className={styles[size]}>
      <p className={online ? styles.online : null} />
      <p> {fullname !== undefined ? fullname.substr(0, 1) : null} </p>
    </div>
  );
}
Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullname: PropTypes.string,
  online: PropTypes.bool,
};
export default Avatar;
