import { HYDRATE, createWrapper } from 'next-redux-wrapper';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/user/user.slice';

export const combinedReducers = combineReducers({
  user: userReducer,
});

export const baseReducer: typeof combinedReducers = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducers(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: baseReducer,
  });

export default createWrapper(makeStore);
