import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './ContactsView.module.css';
import ContactForm from '../../Components/ContactsForm';
import Filter from '../../Components/SearchFilter';
import ContactList from '../../Components/ContactsList';
import contactOperations from '../../redux/contact/contact-operations';
import { getLoading } from '../../redux/contact/contact-selectors';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={style.caption}>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h1>Loading...</h1>}
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);