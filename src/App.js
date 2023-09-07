import "./App.css";
import NavBar from "./components/navBar/navBar";
import Pokemons from "./components/pokemons/pokemons";
import PokemonSearch from "./components/pokemonSearch/pokemonSearch";

function App() {
  return (
    <div>
      <NavBar />
      <PokemonSearch />
      <p>Lista com os pokémons:</p>
      <Pokemons  />
    </div>
  );
}

export default App;
