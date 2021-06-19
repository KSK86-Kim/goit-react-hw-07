import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthentificated } from '../redux/auth/auth-selectors';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({
    component: Component,
    isAuthentificated,
    redirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isAuthentificated ? <Component {...props} /> : <Redirect to={redirectTo} />
        }
    />
);

const mapStateToProps = state => ({
    isAuthentificated: isAuthentificated(state),
});

export default connect(mapStateToProps)(PrivateRoute);