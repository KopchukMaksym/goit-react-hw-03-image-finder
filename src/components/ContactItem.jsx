import PropTypes from 'prop-types';
import s from './FormStyles.module.css';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={s.item}>
      <p>
        {name} : {number}
      </p>
      <button
        className={s.btnDelete}
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};
