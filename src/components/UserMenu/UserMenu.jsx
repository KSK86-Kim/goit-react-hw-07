import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import authOps from '../../redux/auth/auth-operations';

const UserMenu = ({ email, onLogout }) => {
  return (
    <>
      <div className={styles.userMenu}>
        <span className={styles.userEmail}>{email}</span>
        <button className={styles.logoutBtn} type="button" onClick={onLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

const mapDispatchToPtops = dispatch => ({
  onLogout: () => dispatch(authOps.logout()),
});

export default connect(null, mapDispatchToPtops)(UserMenu);
