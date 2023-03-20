import { AnyAction, Dispatch } from '@reduxjs/toolkit';

import { combinedReducers } from '..';

export type AppState = ReturnType<typeof combinedReducers>;

export type AppDispatch = Dispatch<AnyAction>;
