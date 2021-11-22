import s from './navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  return (
    <div>
      <NavLink exact to="/" className={s.nav_link} activeClassName={s.nav_active_link}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="./contacts" className={s.nav_link} activeClassName={s.nav_active_link}>
          Contacts
        </NavLink>
      )}
    </div>
  );
}
