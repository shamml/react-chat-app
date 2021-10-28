import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, setMessageText } from '../../../redux/ducks/messages';
import { useParams } from 'react-router-dom';
import styles from '../chat.module.css';

function InputMessage(props) {
  const dispatch = useDispatch();

  const messageText = useSelector((state) => state.messages.messageText);

  const handleChange = (e) => {
    dispatch(setMessageText(e.target.value));
  };

  const contactId = useParams().id;
  const myId = useSelector((state) => state.application.profile._id);
  const handleSendMessage = () => {
    dispatch(sendMessage(myId, contactId, messageText));
  };

  return (
    <div className={styles['input-message']}>
      <input
        type="text"
        placeholder="Write a message"
        value={messageText}
        onChange={handleChange}
      />
      <span className="material-icons">attach_file</span>

      {/*отправка соощений*/}
      <div className={styles['form-message']}>
        {messageText === '' ? (
          <span className="material-icons">keyboard_voice</span>
        ) : (
          <div onClick={handleSendMessage}>
            <span className="material-icons">send</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputMessage;
