import React, { useState, useEffect } from 'react';

const JohtoPage = () => {
  const [johtoPokemon, setJohtoPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchJohtoPokemon() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251&offset=151');
      const data = await response.json();
      const results = data.results.slice(151, 252); // Get Pokémon 152 to 252

      const johtoDetails = await Promise.all(
        results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          return pokemonResponse.json();
        })
      );

      setJohtoPokemon(johtoDetails);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Johto Pokémon:', error);
    }
  }

  useEffect(() => {
    fetchJohtoPokemon();
  }, []);

  if (isLoading) {
    return <div>Loading Pokémon...</div>;
  }

  return (
    <div>
      <h1>Generation 2 Pokémon</h1>
      <div className="pokemon-list">
        {johtoPokemon.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={`Icon of ${pokemon.name}`} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JohtoPage;
