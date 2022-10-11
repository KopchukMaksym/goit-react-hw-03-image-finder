import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './FormStyles.module.css';

const ContactList = ({ contacts, onDelete }) => {
  if (!contacts.length) return <></>;
  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        return (
          <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
