import axios from "axios";
import { useEffect, useState } from "react";

const PokemonSearch = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  useEffect(() => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon";

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

        setPokemon(pokemonsWithImages);
      })
      .catch((error) => {
        console.log("Erro ao consultar a API:", error);
      });
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      return;
    }

    const foundPokemon = pokemon.find(
      (poke) => poke.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundPokemon) {
      setSearchedPokemon(foundPokemon);
    } else {
      setSearchedPokemon(null);
    }
  };

  return (
    <div>
      <input
        placeholder="Digite o nome do Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {searchedPokemon ? (
        <div>
          <h2>{searchedPokemon.name}</h2>
          <img src={searchedPokemon.image} alt={searchedPokemon.name} />
        </div>
      ) : null}
    </div>
  );
};

export default PokemonSearch;
