const getLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;
const getIsRefresh = state => state.auth.isRefresh;

const authSelectors = { getLoggedIn, getUserName, getIsRefresh };

export default authSelectors;
