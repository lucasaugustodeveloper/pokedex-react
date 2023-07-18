import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({  baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getAllPokemons: builder.query({
      query: () => ({
        method: 'GET',
        url: 'pokemon?offset=0&limit=100'
      }),
      transformResponse: ({ results }) => results
    })
  })
})

export const { useGetAllPokemonsQuery } = pokeApi
