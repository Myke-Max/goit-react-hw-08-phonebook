import Phonebook from './components/phonebook';
import ContactsList from './components/contactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperetions from './redux/auth/auth-operations';
import Filter from './components/filterContacts';
import { ToastContainer } from 'react-toastify';
import Container from './components/container';
import AppBar from './components/AppBar/AppBar';
import { Route, Switch } from 'react-router';
import Homeview from './view/HomeView';
import LoginView from './view/LoginView';
import RegisterView from './view/RegisterView';
import ContactsView from './components/contactList';

// import Counter from './components/Counter';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperetions.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Container>
        <AppBar />
        <Phonebook />
        <Filter />
        <Switch>
          <Route exact path="/" component={Homeview}></Route>
          <Route path="/register" component={RegisterView}></Route>
          <Route path="/login" component={LoginView}></Route>
          <Route path="/contacts" component={ContactsView}></Route>
        </Switch>

        {/* <ContactsList /> */}
      </Container>
    </>
  );
}
