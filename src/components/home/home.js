import PokemonSearch from "../pokemonSearch/pokemonSearch";
import Pokemons from "../pokemons/pokemons";

const Home = () => {
  return (
    <div>
      <PokemonSearch />
      <p className="p">Lista dos pokémons:</p>
      <Pokemons />
    </div>
  );
};
export default Home;
