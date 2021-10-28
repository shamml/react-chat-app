import React, { useEffect } from 'react'
import styles from '../chat.module.css';
import MessagesBlock from './BlockMessages';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadMessages } from '../../../redux/ducks/messages'

function Messages() {

  const id = useParams().id;

  const dispatch = useDispatch();

  const filterFromSearch = useSelector((state) => state.messages.filter);

  const messages = useSelector((state) => {
    return state.messages.messages.filter(
      (message) =>
        message.content.toUpperCase().indexOf(filterFromSearch.toUpperCase()) >
        -1,
    );
  });

  useEffect(() => {
    dispatch(loadMessages(id));
  }, [dispatch, id]);
  return (
    <div className={styles['message-body']}>
      {messages.map((message, index) => {
        return <MessagesBlock message={message} key={index} />;
      })}
    </div>
  );
}

export default Messages;
