import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Logo da PokéAPI"
      />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  background-color: #ef5350;

  img {
    width: 180px;
  }
`;


export default NavBar;
