import React from 'react';
import styles from './profile.module.css';
import Avatar from '../App/Avatar';
import Social from './Social';
import Media from './Media';
import PropTypes from 'prop-types';

function BlockProfile({ contact }) {
  return (
    <div className={styles['profile-block']}>
      <div className={styles['profile-avatar']}>
        <Avatar size="large" fullname={contact.fullname} />
      </div>
      <div className={styles.name}>{contact.fullname}</div>
      <div className={styles.username}>@{contact.username}</div>
      <div className={styles.connection}>
        <span className="material-icons">phone</span>
        <span className="material-icons">videocam</span>
        <span className="material-icons">mail</span>
      </div>
      <Social contact={contact} />
      <Media />
    </div>
  );
}

BlockProfile.propTypes = {
  contact: PropTypes.object,
};

export default BlockProfile;
