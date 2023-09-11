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
        <Title>{pokemonDetails.name}</Title>
        <img src={pokemonDetails.image} alt={pokemonDetails.name} />
        <AddlInfo>
          <h2>Informações adicionais:</h2>
          <p>Tamanho: {pokemonDetails.height}</p>
          <p>Peso: {pokemonDetails.weight}</p>
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
  left: 15px;
  padding: 5px;
  color: #fff;
  font-weight: bold;
  background-color: #007bff;
`;

const Pokemon = styled.div`
  padding: 10px;
  width: 70%;
  margin: 30px auto;
  box-shadow: 10px 5px 5px #e3e5d7;
`;

const Title = styled.h1`
  font-size: 56px;
`;

const AddlInfo = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 24px;
  }
`;

export default PokemonDetails;
