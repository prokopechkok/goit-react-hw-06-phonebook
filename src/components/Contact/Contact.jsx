import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteBtnClick = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        <span className={css.contactName}>{name}:</span>
        <span>{number}</span>
      </p>
      <button
        className={css.contactDeleteBtn}
        type="button"
        onClick={handleDeleteBtnClick}
      >
        Delete
      </button>
    </li>
  );
};
