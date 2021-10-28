import React from 'react';
import styles from '../chat.module.css';
import * as dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { removeMessage } from '../../../redux/ducks/messages';
import * as PropTypes from 'prop-types';

function OutboxMessage({ content, message }) {
  const dispatch = useDispatch();

  const messageId = message._id;

  const { time, read } = message;

  const loading = useSelector((state) => state.messages.loadingDeleteMessage);

  const handleDeleteMessage = () => {
    dispatch(removeMessage(messageId));
  };

  return (
    <div className={styles['outbox-message']}>
      <div className={styles['text-message']}> {content} </div>
      <div className={styles['time-message']}>
        {dayjs(time).format('HH:mm')}
      </div>
      <div className={styles['read-message']}>
        <span className="material-icons">{read ? 'done_all' : 'done'}</span>
      </div>
      <div className={styles.delete} onClick={handleDeleteMessage}>
        <span className="material-icons">
          {loading ? 'auto_delete' : 'delete'}
        </span>
      </div>
    </div>
  );
}

OutboxMessage.propTypes = {
  content: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
};

export default OutboxMessage;
