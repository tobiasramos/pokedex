import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const PokemonSearch = () => {
  const [search, setSearch] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  const handleSearch = () => {
    if (search.trim() === "") {
      return;
    }

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        const foundPokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
        };
        setSearchedPokemon(foundPokemon);
      })
      .catch((error) => {
        console.log("Erro ao consultar a API:", error);
        setSearchedPokemon(null);
      });
  };

  return (
    <SearchContainer>
      <input
        placeholder="Digite o nome do Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {searchedPokemon ? (
        <div>
          <h2>{searchedPokemon.name}</h2>
          <img src={searchedPokemon.image} alt={searchedPokemon.name} />
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
    padding: 8px;
  }
`;

export default PokemonSearch;
