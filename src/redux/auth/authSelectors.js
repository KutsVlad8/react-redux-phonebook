const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectName = state => state.auth.user.name;
const selectIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  selectIsLoggedIn,
  selectName,
  selectIsRefreshing,
};

export default authSelectors;
