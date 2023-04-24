import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    login: (state, action) => {
        console.log(action.payload)
      return{
        ...state,
        token:action.payload.token
      }
    },
    signUp: (state, action) => {
      return{
        ...state,
        email:action.payload
      }
    },
    userData: (state, action) => {
      return{
        ...state,
        data:action.payload
      }
    },
  },
});

export const { login,signUp ,userData} = usersSlice.actions;
export default usersSlice.reducer;
