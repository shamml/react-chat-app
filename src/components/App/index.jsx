import React from 'react';
import Contacts from '../Contacts';
import Messages from '../Messages';
import Profile from '../Profile';
import styles from './index.module.css';
import { Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/contact/:id?">
          <Contacts />
          <Messages />
          <Profile />
        </Route>
        <Route>
          <Contacts />
          <div className={styles['start-messaging']}>
            Выберите, кому хотели бы написать
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
