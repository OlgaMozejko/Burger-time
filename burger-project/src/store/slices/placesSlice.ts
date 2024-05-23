import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Place {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  openingHours: Record<string, string>[];
  reviews: any[];
}

interface PlacesState {
  restaurants: Place[];
}

const initialState: PlacesState = {
  restaurants: [],
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setRestaurants(state, action: PayloadAction<Place[]>) {
      state.restaurants = action.payload;
    },
  },
});

export const { setRestaurants } = placesSlice.actions;
export default placesSlice.reducer;