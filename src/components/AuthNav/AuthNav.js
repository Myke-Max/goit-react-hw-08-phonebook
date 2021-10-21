import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './authNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink exact to="/register" style={s.registerLink} activeStyle={s.activeLink}>
        Registration
      </NavLink>

      <NavLink to="/login" style={s.registerLink} activeStyle={s.activeLink}>
        Login
      </NavLink>
    </div>
  );
}
