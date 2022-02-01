import React, { useEffect, useState } from 'react';

const DisplayPokemon = ({ pokemonName} ) => {

  const [pokemonData, setPokemonData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )
      .then((response) => response.json())
      .then((pokemon) => {

        setPokemonData(pokemon);
        setIsLoading(false);
      });
  }, [pokemonName]);

  return isLoading ? (
    <p>Loading... </p>
  ) : (
    <div>
      <h2>
        {pokemonName}
      </h2>
      <p>
        {`https://pokeapi.co/api/v2/pokemon/${pokemonName}`}
      </p>
    </div>
  );
};

export default DisplayPokemon;


