import React from 'react';
import SearchMessages from './/SearchMessages';
import styles from '../chat.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openProfile } from '../../../redux/ducks/application';

function Header(props) {
  const dispatch = useDispatch();

  const params = useParams().id;

  const contacts = useSelector((state) => state.contacts.contacts);

  const contact = contacts.find((contact) => contact._id === params);

  const loadingMessages = useSelector((state) => state.messages.loading);

  const open = useSelector((state) => state.application.open);
  const handleClickOpen = () => {
    dispatch(openProfile(open));
  };

  return (
    <div className={styles.header}>
      <SearchMessages />
      <div className={styles['user-name']}>
        <div className={styles.online}>
          {loadingMessages ? <div>Подключение...</div> : contact?.fullname}
          {contact?.online === true ? (
            <span className="material-icons">circle</span>
          ) : (
            ''
          )}
        </div>
        <div className={styles.offline}>
          {contact?.online === true ? '' : 'был(а) недавно'}
        </div>
      </div>
      <span className="material-icons" onClick={() => handleClickOpen()}>
        menu
      </span>
    </div>
  );
}

export default Header;
