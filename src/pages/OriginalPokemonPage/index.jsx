import React, { useState, useEffect } from 'react';

const OriginalPokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchFirst151Pokemon() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      const results = data.results;

      const pokemonDetails = [];

      for (const pokemon of results) {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        pokemonDetails.push({
          name: pokemonData.name,
          iconUrl: pokemonData.sprites.front_default,
        });
      }

      setPokemonList(pokemonDetails);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  }

  useEffect(() => {
    fetchFirst151Pokemon();
  }, []);

  if (isLoading) {
    return <div>Loading Pokémon...</div>;
  }

  return (
    <div>
      <h1>Original 151 Pokémon</h1>
      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <img src={pokemon.iconUrl} alt={`Icon of ${pokemon.name}`} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OriginalPokemonPage;
