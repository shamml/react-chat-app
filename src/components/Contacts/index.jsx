import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import BLockContacts from './BlockContacts';
import SearchContacts from './SearchContacts';
import ReactLoading from 'react-loading';

function Contacts(props) {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.contacts.loading);

  const contacts = useSelector((state) => {
    return state.contacts.contacts.filter(
      (contact) =>
        contact.fullname
          .toUpperCase()
          .indexOf(state.contacts.filter.toUpperCase()) > -1,
    );
  });

  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div>
      <SearchContacts />
      <ul>
        {loading ? (
          <ReactLoading type="balls" color="white" />
        ) : (
          contacts.map((contact) => {
            return <BLockContacts contact={contact} key={contact._id} />;
          })
        )}
      </ul>
    </div>
  );
}

export default Contacts;
