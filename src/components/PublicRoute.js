import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthentificated } from '../redux/auth/auth-selectors';

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /todos
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({
    component: Component,
    isAuthentificated,
    redirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isAuthentificated && routeProps.restricted ? (
                <Redirect to={redirectTo} />
            ) : (
                <Component {...props} />
            )
        }
    />
);

const mapStateToProps = state => ({
    isAuthentificated: isAuthentificated(state),
});

export default connect(mapStateToProps)(PublicRoute);