import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPeople = createAsyncThunk("people/fetchPeople", async () => {
  const response = await axios.get("https://swapi.dev/api/people/");

  return response.data.results;
});
