import Phonebook from './components/phonebook';
import ContactsList from './components/contactList/ContactList';
import Filter from './components/filterContacts';
import { ToastContainer } from 'react-toastify';
import Container from './components/container';
import AppBar from './components/AppBar/AppBar';
import { Route, Switch } from 'react-router';

// import Counter from './components/Counter';

export default function App() {
  return (
    <>
      <ToastContainer />
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/register"></Route>
          <Route path="/login"></Route>
          <Route path="/contacts"></Route>
        </Switch>
        <Phonebook />
        <Filter />
        <ContactsList />
      </Container>
    </>
  );
}
