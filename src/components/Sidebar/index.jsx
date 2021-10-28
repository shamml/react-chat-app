import React from 'react';
import SearchContacts from './SearchContacts/index';
import Contacts from './Contacts/index';
import styles from './sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.contacts}>
      <SearchContacts />
      <Contacts />
    </div>
  );
}

export default Sidebar;
