import React, { useState } from 'react'
import { PokemonForm , PokemonData } from '../../components';


const SearchPokemonPage = () => {
  const [pokemonName, setPokemonName] = useState('')
  
  const handleSearch = (name) => {
    setPokemonName(name);
  };

  return (
    <main>
      <PokemonForm onSearch={handleSearch} />
      <PokemonData pokemonName={pokemonName} />
    </main>
  )
}

export default SearchPokemonPage