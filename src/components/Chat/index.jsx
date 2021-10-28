import React, { useEffect } from 'react';
import styles from './chat.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MessagesBlock from './Messages/BlockMessages';
import { loadMessages } from '../../redux/ducks/messages';
import Header from './Header/Header';
import InputMessage from './InputMessages/InputMessage';
import Messages from './Messages'

function Chat(props) {


  return (
    <div className={styles.messages} id="block_message">
      <Header />
      <Messages/>
      <InputMessage />
    </div>
  );
}

export default Chat;
