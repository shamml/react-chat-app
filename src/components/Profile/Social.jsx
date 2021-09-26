import React from 'react';
import styles from './profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function Social({ contact }) {
  return (
    <div className={styles.social}>
      Social
      <div className={styles['social-bg']}>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faInstagram} />
          <div className={styles['social-icons']}>
            {contact.socials !== undefined ? contact.socials.instagram : null}
          </div>
        </div>

        <div className={styles.icons}>
          <FontAwesomeIcon icon={faTwitter} />
          <div className={styles['social-icons']}>
            {contact.socials !== undefined ? contact.socials.facebook : null}
          </div>
        </div>

        <div className={styles.icons}>
          <FontAwesomeIcon icon={faFacebook} />
          <div className={styles['social-icons']}>
            {contact.socials !== undefined ? contact.socials.facebook : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
