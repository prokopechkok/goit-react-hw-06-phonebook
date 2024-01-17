import React, { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { customAlphabet } from 'nanoid';
import css from './App.module.css';

const nanoid = customAlphabet('1234567890abcdef', 10);
export const LS_KEYS = {
  contacts: 'contacts',
};

export const App = () => {
  const hardcodedContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(hardcodedContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLS = JSON.parse(localStorage.getItem(LS_KEYS.contacts));
    if (contactsFromLS) {
      setContacts(contactsFromLS);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LS_KEYS.contacts, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddedContact = formData => {
    const hasDuplicates = contacts.some(
      contact =>
        contact.name.toLowerCase() === formData.name.toLowerCase() ||
        contact.number === formData.number
    );

    if (hasDuplicates) {
      alert(`Contact ${formData.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      {
        ...formData,
        id: nanoid(5),
      },
    ]);
  };

  const handleFilterChange = e => setFilter(e.currentTarget.value);

  const handleDeleteBtnClick = contactId =>
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddedContact} />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteBtnClick={handleDeleteBtnClick}
      />
    </div>
  );
};
