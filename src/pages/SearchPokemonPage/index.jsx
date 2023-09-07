import React, { useState } from 'react'
import { PokemonForm , PokemonData } from '../../components';


const SearchPokemonPage = () => {
  const [pokemonName, setPokemonName] = useState('')
  
  const handleSearch = (name) => {
    setPokemonName(name);
  };

  return (
    <div>
      <PokemonForm onSearch={handleSearch} />
      <PokemonData pokemonName={pokemonName} />
    </div>
  )
}

export default SearchPokemonPage