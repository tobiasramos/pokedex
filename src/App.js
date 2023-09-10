import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import PokemonDetails from "./components/pokemonDetails/pokemonDetails ";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
