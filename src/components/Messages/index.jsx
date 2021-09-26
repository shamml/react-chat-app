import React, { useEffect } from 'react';
import styles from './messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessagesBlock from './BlockMessages';
import { loadMessages } from '../../redux/ducks/messages';
import Header from './Header';
import InputMessage from './InputMessage';

function Messages(props) {
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
    <div className={styles.messages} id="block_message">
      <Header />
      <div className={styles['message-body']}>
        {messages.map((message, index) => {
          return <MessagesBlock message={message} key={index} />;
        })}
      </div>
      <InputMessage />
    </div>
  );
}

export default Messages;
