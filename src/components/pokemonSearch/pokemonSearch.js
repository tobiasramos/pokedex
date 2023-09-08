import { useState } from "react";
import styled from "styled-components";
import { searchPokemon } from "../../api";

const PokemonSearch = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const onChangeHandle = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    onSearchHandle(search);
  };

  const onSearchHandle = async (pokemon) => {
      const result = await searchPokemon(pokemon); 
      setPokemon(result);
  };

  return (
    <SearchContainer>
      <input
        placeholder="Digite o nome do Pokémon"
        value={search}
        onChange={onChangeHandle}
      />
      <button onClick={handleSearch}>Buscar</button>
      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  margin: 10px;

  input {
    height: 30px;
    margin-right: 15px;
  }

  button {
    cursor: pointer;
    padding: 10px;
    border: none;
    color: #fff;
    background-color: #4e5c69;
  }
`;

export default PokemonSearch;
