import { authApi } from '@/api/auth.api';
import { userApi } from '@/api/users.api';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

interface SessionState {
    authenticated: boolean;
    id: string | null;
}

const initialState: SessionState = {
    authenticated: !!localStorage.jwt && !!localStorage.userID,
    id: localStorage.userID || null
};

// Session slice of state where data related to currently logged in user lives
const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    logout: state => {
        state.authenticated = false;
        state.id = null;
        localStorage.removeItem('userID');
        localStorage.removeItem('jwt');
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(
            authApi.endpoints.login.matchFulfilled,
            authApi.endpoints.register.matchFulfilled,
        ),
        (state, action) => {
            const {token, user} = action.payload;
            state.authenticated = true;
            state.id = user.id;
            localStorage.setItem('userID', user.id);
            localStorage.setItem('jwt', token);
        }
      )
      .addMatcher(
        userApi.endpoints.getUserById.matchFulfilled,
        (state, action) => {
            const {id} = action.payload;
            state.authenticated = true;
            state.id = id;
        }
      );
  }
});

export const {
    logout
} = sessionSlice.actions;

export default sessionSlice.reducer;