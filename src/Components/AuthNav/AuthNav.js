import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

const AuthNav = () => (
  <div className={style.container}>
    <NavLink
      to="/register"
      exact
      className={style.link}
      activeClassName={style.activeLink}
    >
      Sign Up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={style.link}
      activeClassName={style.activeLink}
    >
      Log In
    </NavLink>
  </div>
);

export default AuthNav;