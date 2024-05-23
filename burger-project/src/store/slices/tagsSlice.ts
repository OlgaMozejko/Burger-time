import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TagsState {
  items: string[];
}

const initialState: TagsState = {
  items: [],
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTags(state, action: PayloadAction<string[]>) {
      state.items = action.payload;
    },
  },
});

export const { setTags } = tagsSlice.actions;
export default tagsSlice.reducer;