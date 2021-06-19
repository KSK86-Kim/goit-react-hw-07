import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthentificated } from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

const Navigation = ({ isAuthentificated }) => {
  return (
    <nav className={s.nav}>
      <NavLink to="/" exact className={s.link} activeClassName="activeNavLink">
        Home
      </NavLink>

      {isAuthentificated && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName="activeNavLink"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthentificated: isAuthentificated(state),
});

export default connect(mapStateToProps)(Navigation);
