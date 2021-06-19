import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthMenu.module.css';

const AuthMenu = () => {
  return (
    <div className={s.userNav}>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        exact
        to="/login"
      >
        Log in
      </NavLink>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        exact
        to="/register"
      >
        Sign up
      </NavLink>
    </div>
  );
};

export default AuthMenu;
