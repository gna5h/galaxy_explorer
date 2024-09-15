import { createSlice } from "@reduxjs/toolkit";
import { fetchPeople } from "../thunks/people_thunk.ts";
import { PeopleState } from "../../ts/types/people.ts";
import { Character } from "../../ts/types/character.ts";

const initialState: PeopleState = {
  people: [] as Character[],
  status: "idle",
  error: null,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.people = action.payload;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default peopleSlice.reducer;
