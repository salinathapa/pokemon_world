import React, { useState, useEffect } from 'react';

const GalarPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchGalarPokemon() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=96&offset=809');
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
      console.error('Error fetching Galar Pokémon:', error);
    }
  }

  useEffect(() => {
    fetchGalarPokemon();
  }, []);

  if (isLoading) {
    return <div>Loading Pokémon...</div>;
  }

  return (
    <div>
      <h1>Galar Pokémon</h1>
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

export default GalarPage;
