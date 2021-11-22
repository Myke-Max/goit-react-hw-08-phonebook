import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from './redux/auth/auth-selectors';
import authOperetions from './redux/auth/auth-operations';
import { ToastContainer } from 'react-toastify';
import Container from './components/container';
import AppBar from './components/AppBar/AppBar';
import { Route, Switch } from 'react-router';
import Homeview from './view/HomeView';
import LoginView from './view/LoginView';
import RegisterView from './view/RegisterView';
import ContactsView from './components/contactList';
import PrivateRoute from './components/Routes/PrivateRoutes';
import PublicRoutes from './components/Routes/PublicRoutes';

// import Counter from './components/Counter';

export default function App() {
  const dispatch = useDispatch();

  const isRefresh = useSelector(authSelectors.getIsRefresh);

  useEffect(() => {
    dispatch(authOperetions.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefresh && (
        <Container>
          <ToastContainer />
          <AppBar />
          {/* <Phonebook />
        <Filter /> */}
          <Switch>
            <PublicRoutes exact path="/">
              <Homeview />
            </PublicRoutes>
            {/* <Route exact path="/" component={Homeview}></Route> */}
            <PublicRoutes path="/register" restricted>
              <RegisterView />
            </PublicRoutes>
            {/* <Route path="/register" component={RegisterView}></Route> */}
            <PublicRoutes path="/login" restricted redirectedTo="/contacts">
              <LoginView />
            </PublicRoutes>
            {/* <Route path="/login" component={LoginView}></Route> */}
            {/* <Route path="/contacts" component={ContactsView}></Route> */}
            <PrivateRoute path="/contacts" redirectedTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>

          {/* <ContactsList /> */}
        </Container>
      )}
    </>
  );
}
