import { useState } from 'react';
import DisplayPokemon from './DisplayPokemon';
import Search from './Search';

const Main = () => {

  const [pokemonName, setPokemonName] = useState('stich');
  
  return (
    <main>
      <Search setPokemonName={setPokemonName} />
      <DisplayPokemon pokemonName={pokemonName}/>
    </main>
  );
};

export default Main;