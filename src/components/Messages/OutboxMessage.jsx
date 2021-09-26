import React from 'react';
import styles from './messages.module.css';
import * as dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { removeMessage } from '../../redux/ducks/messages';
import * as PropTypes from 'prop-types'

function OutboxMessage({ content, message }) {
  const dispatch = useDispatch();

  const messageId = message._id;

  const timeSendMessage = message.time;

  const readMessage = message.read;

  const loading = useSelector((state) => state.messages.loadingDeleteMessage);

  const handleDeleteMessage = () => {
    dispatch(removeMessage(messageId));
  };

  return (
    <div className={styles['outbox-message']}>
      <div className={styles['text-message']}>{content} </div>
      <div className={styles['time-message']}>
        {dayjs(timeSendMessage).format('HH:mm')}
      </div>
      <div className={styles['read-message']}>
        {readMessage === true ? (
          <div className={styles['done-all']}>
            <span className="material-icons">done_all</span>
          </div>
        ) : (
          <div>
            <span className="material-icons">done</span>
          </div>
        )}
      </div>
      <div className={styles.delete} onClick={handleDeleteMessage}>
        {loading ? (
          <span className="material-icons">auto_delete</span>
        ) : (
          <span className="material-icons">delete</span>
        )}
      </div>
    </div>
  );
}

OutboxMessage.propTypes = {
  content: PropTypes.string.isRequired,
  message: PropTypes.object,
};

export default OutboxMessage;
