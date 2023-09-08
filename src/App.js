import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Pokemons from "./components/pokemons/pokemons";
import PokemonSearch from "./components/pokemonSearch/pokemonSearch";
import PokemonDetails from "./components/pokemonDetails/pokemonDetails ";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <PokemonSearch />
        <p className="p">Lista dos pokémons:</p>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
