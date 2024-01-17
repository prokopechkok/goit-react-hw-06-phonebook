import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
export const ContactList = ({ contacts, handleDeleteBtnClick }) => (
  <ul className={css.contactList}>
    {contacts.map(({ name, number, id }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        handleDeleteBtnClick={handleDeleteBtnClick}
      />
    ))}
  </ul>
);
