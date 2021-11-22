import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { Redirect, Route } from 'react-router';

export default function PublicRoutes({
  children,
  restricted = false,
  redirectedTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>{shouldRedirect ? <Redirect to={redirectedTo} /> : children}</Route>
  );
}
