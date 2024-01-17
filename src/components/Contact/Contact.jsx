import css from './Contact.module.css';

export const Contact = ({ id, name, number, handleDeleteBtnClick }) => (
  <li className={css.contactItem}>
    <p className={css.contactText}>
      <span className={css.contactName}>{name}:</span>
      <span>{number}</span>
    </p>
    <button
      className={css.contactDeleteBtn}
      type="button"
      onClick={() => handleDeleteBtnClick(id)}
    >
      Delete
    </button>
  </li>
);
