import { createSlice } from "@reduxjs/toolkit";
import { fetchPeople, searchPeople } from "../thunks/people_thunk.ts";
import { PeopleState } from "../../ts/types/people.ts";
import { Character } from "../../ts/types/character.ts";

const initialState: PeopleState = {
  people: [] as Character[],
  count: 0,
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
        state.count = 0;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.people = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
        state.count = 0;
      })
      .addCase(searchPeople.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchPeople.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.people = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(searchPeople.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default peopleSlice.reducer;
