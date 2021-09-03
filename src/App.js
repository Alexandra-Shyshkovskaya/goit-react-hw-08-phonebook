import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from "./Components/Container";
import ContactForm from "./Components/ContactsForm";
import Filter from "./Components/SearchFilter";
import ContactList from "./Components/ContactsList";
import contactOperations from './redux/contact/contact-operations';
import { getLoading } from './redux/contact/contact-selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
           {this.props.isLoadingContacts && <h1>Loading...</h1>}
          <ContactList />
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);