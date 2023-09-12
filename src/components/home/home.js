import styled from "styled-components";
import PokemonSearch from "../pokemonSearch/pokemonSearch";
import Pokemons from "../pokemons/pokemons";

const Home = () => {
  return (
    <Container>
      <PokemonSearch />
      <p className="p">Lista dos pokémons:</p>
      <Pokemons />
    </Container>
  );
};

const Container = styled.div`


@media (max-width: 530px) {
  text-align: center;
}
`;

export default Home;
