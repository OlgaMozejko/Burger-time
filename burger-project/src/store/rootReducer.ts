import { combineReducers } from '@reduxjs/toolkit';
import placesReducer from './slices/placesSlice';
import tagsReducer from './slices/tagsSlice';

const rootReducer = combineReducers({
  places: placesReducer,
  tags: tagsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;