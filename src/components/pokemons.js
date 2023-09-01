import axios from "axios";
import { useEffect, useState } from "react";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon"; 

    axios
      .get(apiUrl)
      .then((response) => {
        const results = response.data.results;

        const pokemonsWithImages = results.map((poke, index) => ({
          id: index + 1,
          name: poke.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));

        setPokemon(pokemonsWithImages);
      })
      .catch((error) => {
        console.log("Erro ao consultar a API:", error);
      });
  }, []);

  return (
    <div>
      <p>Lista com os pokemons:</p>
      {pokemon.map((poke) => (
        <div key={poke.id}>
          <img src={poke.image} alt={poke.name} />
          <p>{poke.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Pokemons;
