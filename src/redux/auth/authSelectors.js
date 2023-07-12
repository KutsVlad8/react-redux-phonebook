const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectName = state => state.auth.user.name;

const authSelectors = {
  selectIsLoggedIn,
  selectName,
};

export default authSelectors;
