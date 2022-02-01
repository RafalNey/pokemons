import { useState } from 'react';
import DisplayPokemon from './DisplayPokemon';
import Search from './Search';

const Main = () => {

  const [pokemonName, setPokemonName] = useState('https://pokeapi.co/api/v2/pokemon/bulbasaur');
  
  return (
    <main>
      <Search setPokemonName={setPokemonName} />
      <DisplayPokemon />
    </main>
  );
};

export default Main;