import PropTypes from 'prop-types';
import s from './FormStyles.module.css';

const Filter = ({ filter, onFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        className={s.inputFilter}
        onChange={onFilter}
        type="text"
        value={filter}
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Filter may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};
