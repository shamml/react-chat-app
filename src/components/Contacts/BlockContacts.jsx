import React from 'react';
import styles from './contacts.module.css';
import Avatar from '../App/Avatar';
import { NavLink } from 'react-router-dom';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';

function BLockContacts({ contact }) {
  return (
    <NavLink to={`/contact/${contact._id}`} activeClassName={styles.active}>
      <li>
        <div className={styles.avatar}>
          <Avatar
            size="medium"
            fullname={contact.fullname}
            online={contact.online}
          />
        </div>
        <div className={styles['contact-names']}>
          <div className={styles['contact-name']}> {contact.fullname}</div>

          <div className={styles['contact-message']}>
            {contact.lastMessage === undefined
              ? ''
              : contact.lastMessage.content}
          </div>
        </div>
        {contact.lastMessage === undefined ? (
          ''
        ) : (
          <div className={styles['message-time']}>
            {dayjs(contact.lastMessage?.time).format('HH:mm')}
          </div>
        )}
      </li>
    </NavLink>
  );
}

BLockContacts.propTypes = {
  contact: PropTypes.object,
};

export default BLockContacts;
