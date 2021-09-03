import React, { Component } from 'react';
import style from "./ContactsForm.module.css";
import { connect } from 'react-redux';
import { contactOperations } from '../../redux/contact';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = event => {
    event.preventDefault();
  
    this.props.addContacts(this.state);
    this.reset();
  };
  
  render() {
    const { name, number } = this.state;
  
    return (
      <form className={style.ContactForm} onSubmit={this.handleSubmit}>
        <label className={style.label}>Name</label>
        <input
          className={style.input}
          value={name}
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Введите имя"
        />
        <label className={style.labelNumber}>Number</label>
        <input
          className={style.input}
          value={number}
          onChange={this.handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="Введите номер телефона"
        />
        <button type="submit" className={style.button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addContacts: contactForm =>
    dispatch(contactOperations.addContacts(contactForm)),
});
export default connect(null, mapDispatchToProps)(ContactForm);