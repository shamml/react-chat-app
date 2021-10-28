import React from 'react';
import Sidebar from '../Sidebar';
import Chat from '../Chat';
import Profile from '../Profile';
import styles from './index.module.css';
import { Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path="/contact/:id?">
          <Sidebar />
          <Chat />
          <Profile />
        </Route>
        <Route>
          <Sidebar />
          <div className={styles['start-messaging']}>
            Выберите, кому хотели бы написать
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
