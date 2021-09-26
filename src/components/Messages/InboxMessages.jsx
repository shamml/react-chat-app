import React from 'react';
import styles from './messages.module.css';
import * as dayjs from 'dayjs';
import Avatar from '../App/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeMessage } from '../../redux/ducks/messages';
import PropTypes from 'prop-types';

function InboxMessages({ content, message }) {
  const timeSendMessage = message.time;

  const id = useParams().id;

  const contacts = useSelector((state) => state.contacts.contacts);

  const contact = contacts.find((contact) => contact._id === id);

  const dispatch = useDispatch();

  const messageId = message._id;

  const loading = useSelector((state) => state.messages.loadingDeleteMessage);

  const handleDeleteMessage = () => {
    dispatch(removeMessage(messageId));
  };

  return (
    <div className={styles.inbox}>
      <Avatar size="small" fullname={contact.fullname} />
      <div className={styles['inbox-message']}>
        <div className={styles['text-message']}> {content} </div>
        <div className={styles['time-message-inbox']}>
          {dayjs(timeSendMessage).format('HH:mm')}
        </div>
        <div className={styles.delete} onClick={handleDeleteMessage}>
          {loading ? (
            <span className="material-icons">auto_delete</span>
          ) : (
            <span className="material-icons">delete</span>
          )}
        </div>
      </div>
    </div>
  );
}

InboxMessages.propTypes = {
  content: PropTypes.string.isRequired,
  message: PropTypes.object,
};

export default InboxMessages;
