import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './FormStyles.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleNameValue = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    const idEl = nanoid();
    e.preventDefault();
    this.props.onSubmit({
      id: idEl,
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>Name:</label>
        <input
          className={s.input}
          onChange={this.handleNameValue}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label />

        <label className={s.label}>Number:</label>
        <input
          className={s.input}
          onChange={this.handleNameValue}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <label />

        <button className={s.btnSubmit} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
