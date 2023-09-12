import React, { useState } from "react";
import styled from "styled-components";
import { searchPokemon } from "../../api";
import { Link } from "react-router-dom";

const PokemonSearch = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const onChangeHandle = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    if (search.trim() === "") {
      setError("O campo de pesquisa está em branco.");
    } else {
      onSearchHandle(search);
    }
  };

  const onSearchHandle = async (pokemon) => {
    try {
      const result = await searchPokemon(pokemon);
      setPokemon(result);
      setError(null); 
    } catch (err) {
      setError("Pokémon não encontrado.");
      setPokemon(null); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <input
        placeholder="Digite o nome do Pokémon"
        value={search}
        onChange={onChangeHandle}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Buscar</button>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      {pokemon ? (
        <div>
          <Link to={`/pokemon/${pokemon.id}`}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </Link>
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

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

export default PokemonSearch;