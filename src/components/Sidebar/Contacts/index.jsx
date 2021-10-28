import React, { useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../../redux/ducks/contacts';
import BLockContacts from './BlockContacts'

function Contacts() {
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
    <ul>
      {loading ? (
        <ReactLoading type="balls" color="white" />
      ) : (
        contacts.map((contact) => {
          return <BLockContacts contact={contact} key={contact._id} />;
        })
      )}
    </ul>
  );
}

export default Contacts;
