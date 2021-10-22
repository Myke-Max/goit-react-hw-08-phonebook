import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './authNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink exact to="/register" className={s.registerLink} activeClassName={s.activeLink}>
        Registration
      </NavLink>

      <NavLink to="/login" className={s.registerLink} activeClassName={s.activeLink}>
        Login
      </NavLink>
    </div>
  );
}
