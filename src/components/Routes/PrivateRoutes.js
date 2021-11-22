import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { Redirect, Route } from 'react-router';

export default function PrivateRoutes({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);

  return <Route {...routeProps}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>;
}
