import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import s from './FormStyles.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contact => {
    const isExist = this.state.contacts.filter(el => contact.name === el.name);
    if (!!isExist.length) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  };

  handleFilter = e => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value.toLowerCase(),
    });
  };

  handleDelete = id => {
    const newContacts = this.state.contacts.filter(el => el.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts, filter } = this.state;

    const filterItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <div className={s.section}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={this.handleFilter} />
        {!!contacts.length && (
          <ContactList contacts={filterItems} onDelete={this.handleDelete} />
        )}
      </div>
    );
  }
}

export default App;
