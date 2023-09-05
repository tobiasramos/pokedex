import "./App.css";
import PokemonSearch from "./components/pokemonSearch";
import Pokemons from "./components/pokemons";


function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokemonSearch />
      <p>Lista com os pokemons:</p>
      <Pokemons />
    </div>
  );
}

export default App;
