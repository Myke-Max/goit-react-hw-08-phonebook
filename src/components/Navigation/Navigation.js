import s from './navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <NavLink exact to="/" className={s.nav_link} activeClassName={s.nav_active_link}>
        Home
      </NavLink>

      <NavLink to="./contacts" className={s.nav_link} activeClassName={s.nav_active_link}>
        Contacts
      </NavLink>
    </div>
  );
}
