export const selectName = state => state.auth.user.name;

export const selectIsLoading = state => state.auth.isLoading;

export const selectJWT = state => state.auth.JWT;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
