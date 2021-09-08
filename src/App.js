import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Backdrop from './components/Backdrop';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <Container>
          <AppBar />
          <Suspense fallback={<Backdrop />}>
            <Switch>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/login"
                restricted
                redirectTo="/contacts"
                component={LoginView}
              />
              <PrivateRoute
                path="/contacts"
                redirectTo="/login"
                component={ContactsView}
              />
            </Switch>
          </Suspense>
          {/* <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
           {this.props.isLoadingContacts && <h1>Loading...</h1>}
 */}         {/*  <ContactList /> */}
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.onGetCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);