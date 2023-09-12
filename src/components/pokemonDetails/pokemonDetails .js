import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonDetails } from "../../api";
import styled from "styled-components";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonDetails(id);
        setPokemonDetails(response);
      } catch (error) {
        console.log("Erro ao consultar os detalhes do Pokémon:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!pokemonDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <PokemonContainer>
      <BtnBack to="..">Voltar</BtnBack>
      <Pokemon>
        <div>
          <Title>{pokemonDetails.name}</Title>
          <img src={pokemonDetails.image} alt={pokemonDetails.name} />
        </div>
        <AddlInfo>
          <h2>Informações adicionais:</h2>
          <p>Tamanho: {pokemonDetails.height}</p>
          <p>Peso: {pokemonDetails.weight}</p>
          <h2>Habilidades:</h2>
          {pokemonDetails.abilities.map((ability, index) => (
            <p key={index}>{ability}</p>
          ))}
          <h2>Tipos:</h2>
          {pokemonDetails.types.map((type, index) => (
            <p key={index}>{type}</p>
          ))}
        </AddlInfo>
      </Pokemon>
    </PokemonContainer>
  );
};

const PokemonContainer = styled.div`
  position: relative;
`;

const BtnBack = styled(Link)`
  position: absolute;
  top: 0px;
  left: 5%;
  padding: 5px;
  color: #fff;
  font-weight: bold;
  background-color: #c62828;
`;

const Pokemon = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin: 30px auto;
  box-shadow: 10px 5px 5px #e3e5d7;

  @media (max-width: 730px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 56px;
`;

const AddlInfo = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 24px;
  }
  p,
  li {
    padding: 5px;
    margin: 3px;
    color: #fff;
    background-color: #ef5350;
  }
`;

export default PokemonDetails;
