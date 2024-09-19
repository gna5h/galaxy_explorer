import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async (page: number) => {
    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );

    const people = response.data.results;

    const updatedPeople = await Promise.all(
      people.map(async (person: any) => {
        const updatedFilms = await Promise.all(
          person.films.map(async (filmUrl: string) => {
            const filmId = filmUrl.match(/\/api\/films\/(\d+)\//)?.[1];

            if (filmId) {
              const filmResponse = await axios.get(
                `https://swapi.dev/api/films/${filmId}/`
              );
              return filmResponse.data.title;
            }

            return filmUrl;
          })
        );

        let homeworldName = person.homeworld;
        if (person.homeworld) {
          const homeworldResponse = await axios.get(person.homeworld);
          homeworldName = homeworldResponse.data.name;
        }

        return {
          ...person,
          films: updatedFilms,
          homeworld: homeworldName,
        };
      })
    );

    return {
      ...response.data,
      results: updatedPeople,
    };
  }
);

export const searchPeople = createAsyncThunk(
  "people/searchPeople",
  async (keyword: string) => {
    const response = await axios.get(
      `https://swapi.dev/api/people/?search=${keyword}`
    );

    const people = response.data.results;

    const updatedPeople = await Promise.all(
      people.map(async (person: any) => {
        const updatedFilms = await Promise.all(
          person.films.map(async (filmUrl: string) => {
            const filmId = filmUrl.match(/\/api\/films\/(\d+)\//)?.[1];

            if (filmId) {
              const filmResponse = await axios.get(
                `https://swapi.dev/api/films/${filmId}/`
              );
              return filmResponse.data.title;
            }

            return filmUrl;
          })
        );

        let homeworldName = person.homeworld;
        if (person.homeworld) {
          const homeworldResponse = await axios.get(person.homeworld);
          homeworldName = homeworldResponse.data.name;
        }

        return {
          ...person,
          films: updatedFilms,
          homeworld: homeworldName,
        };
      })
    );

    return {
      ...response.data,
      results: updatedPeople,
    };
  }
);
