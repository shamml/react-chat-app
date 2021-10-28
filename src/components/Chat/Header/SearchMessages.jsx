import React from 'react';
import styles from '../chat.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterMessages } from '../../../redux/ducks/messages';

function SearchMessages(props) {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.messages.filter);

  const handelMessagesFilter = (e) => {
    dispatch(setFilterMessages(e.target.value));
  };

  return (
    <div className={styles['search-messages']}>
      <input
        type="text"
        value={filter}
        className={styles.input}
        onChange={(e) => handelMessagesFilter(e)}
        placeholder="Search messages"
      />
    </div>
  );
}

export default SearchMessages;
