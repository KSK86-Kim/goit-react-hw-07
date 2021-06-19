const isAuthentificated = state => state.auth.isLoggedIn;
const currentUserEmail = state => state.auth.user.email;
const currentUserName = state => state.auth.user.name;

export { isAuthentificated, currentUserEmail, currentUserName };