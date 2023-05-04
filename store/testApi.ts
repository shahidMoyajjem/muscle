import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const testApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://musclewiki.p.rapidapi.com",
    prepareHeaders: (headers, { getState }) => {
      headers.set('Access-Control-Allow-Origin', '*'),
      headers.set('X-RapidAPI-Key', 'b5364b69dfmsh0dffcfef36a1105p13c2afjsn9839267f971b'),
      headers.set('X-RapidAPI-Host', 'musclewiki.p.rapidapi.com')
    }
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query<
      { species: { name: string }; sprites: { front_shiny: string } },
      string
    >({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonList: builder.query<{ results: Array<{ name: string }> }, void>({
      query: () => `pokemon/`,
    }),
    getExerciseById : builder.query<{ results: Array<{ name: string }> }, void>({
      query: (id) => `exercises/${id}`,
    }),
  }), 
});

// Export hooks for usage in functional components
export const {
  useGetPokemonByNameQuery,
  useGetPokemonListQuery,
  useGetExerciseByIdQuery,
  util: { getRunningOperationPromises },
} = testApi;

// export endpoints for use in SSR
export const { getPokemonByName, getPokemonList, getExerciseById } = testApi.endpoints;