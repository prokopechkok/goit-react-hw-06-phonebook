// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Contact } from 'components';
import { getContacts, getFilter } from '../../redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim().toLowerCase())
  );
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ name, number, id }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
