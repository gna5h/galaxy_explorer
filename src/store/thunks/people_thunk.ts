import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async (page: number) => {
    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );

    return response.data;
  }
);
