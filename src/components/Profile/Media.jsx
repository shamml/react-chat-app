import React from 'react';
import styles from './profile.module.css';
function Media(props) {
  return (
    <div className={styles.media}>
      Media
      <div className={styles['media-bg']}>
        <div className={styles['media-cube']}></div>
        <div className={styles['media-pdf']}>desktop-chat.pdf</div>
      </div>
    </div>
  );
}

export default Media;
