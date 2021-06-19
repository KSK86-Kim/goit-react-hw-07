import React from 'react';
import { connect } from 'react-redux';
import UserMenu from '../UserMenu';
import AuthMenu from '../AuthMenu';
import Navigation from '../Navigation';
import {
  isAuthentificated,
  currentUserEmail,
} from '../../redux/auth/auth-selectors';
import s from './NavHeader.module.css';

const NavHeader = ({ isAuthentificated, currentUserEmail }) => {
  return (
    <header className={s.header}>
      <Navigation />
      {isAuthentificated ? <UserMenu email={currentUserEmail} /> : <AuthMenu />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthentificated: isAuthentificated(state),
  currentUserEmail: currentUserEmail(state),
});

export default connect(mapStateToProps)(NavHeader);
