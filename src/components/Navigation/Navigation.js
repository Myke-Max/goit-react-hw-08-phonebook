import s from './navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <NavLink exact to="/" style={s.nav_link} activeStyle={s.nav_active_link}>
        Home
      </NavLink>

      <NavLink to="./contacts" style={s.nav_link} activeStyle={s.nav_active_link}>
        Contacts
      </NavLink>
    </div>
  );
}
