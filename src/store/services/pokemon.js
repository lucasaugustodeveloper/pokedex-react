import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const getInfoPokemons = async (pokemons) => {
  const urlPokemons = pokemons.map(async pokemon => {
    const res = await fetch(pokemon.url)

    return res.json()
  })

  return await Promise.all(urlPokemons)
}

export const pokeApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({  baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getAllPokemons: builder.query({
      query: () => ({
        method: 'GET',
        url: 'pokemon?offset=0&limit=100'
      }),
      transformResponse: ({ results }) => {
        const pokemons = getInfoPokemons(results)

        return pokemons.then(res => res.map(({ name, types, sprites }) => ({
          name,
          types: types.map(({ type }) => type.name),
          image: sprites.other.dream_world.front_default
        })))
      }
    })
  })
})

export const { useGetAllPokemonsQuery } = pokeApi
