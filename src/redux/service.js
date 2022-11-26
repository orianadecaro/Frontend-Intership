import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios';
import { UserImage } from './slice/UserSlice';

export  const  UserFetch = () =>(dispatch)=>{
    axios.get('../../api/index.js').then((response)=>{
       dispatch(loginUserData(response.data.name ));
      dispatch(  UserImage(response.data.image));
       dispatch( logoutUserData());

    }).catch((error) => console.log(error));


}

// Need to use the React-specific entry point to import createApi


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
