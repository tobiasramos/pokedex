import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";

const Pokemons = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=20";

    axios
      .get(apiUrl)
      .then((response) => {
        const results = response.data.results;

        const pokemonsWithImages = results.map((poke, index) => ({
          id: index + 1,
          name: poke.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));

        setPokemonList(pokemonsWithImages);
      })
      .catch((error) => {
        console.log("Erro ao consultar a API:", error);
      });
  }, []);

  return (
    <PokeContainer>
      {pokemonList.map((poke) => (
        <Poke key={poke.id}>
          <img src={poke.image} alt={poke.name} />
          <p>{poke.name}</p>
        </Poke>
      ))}
    </PokeContainer>
  );
};

const PokeContainer = styled.div`
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

const Poke = styled.div`
  cursor: pointer;
  width: 6rem;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;

  img {
    border: 1px solid green;
    border-radius: 10px;
  }
}`;

export default Pokemons;
