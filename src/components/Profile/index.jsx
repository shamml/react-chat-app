import React, { useEffect } from 'react';
import styles from './profile.module.css';
import BlockProfile from './BlockProfile';
import { Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile } from '../../redux/ducks/application';
import { CSSTransition } from 'react-transition-group';

function Profile(props) {
  const id = useParams().id;

  const dispatch = useDispatch();

  const open = useSelector((state) => state.application.open);

  const contacts = useSelector((state) => {
    return state.contacts.contacts.filter((contact) => id === contact._id);
  });

  useEffect(() => {
    dispatch(loadProfile());
  }, [dispatch]);

  return (
    <CSSTransition
      in={open}
      unmountOnExit
      timeout={1000}
      classNames={{
        enter: 'profile-enter',
        enterActive: 'profile-enter-active',
        exit: 'profile-exit',
        exitActive: 'profile-exit-active',
      }}
    >
      <div className={styles.profile}>
        <Route exact path="/contact/:id?">
          {contacts.map((contact) => {
            return <BlockProfile contact={contact} key={contact._id} />;
          })}
        </Route>
      </div>
    </CSSTransition>
  );
}

export default Profile;
