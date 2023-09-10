import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonDetails } from "../../api";


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
    <div>
      <h2>{pokemonDetails.name}</h2>
      <img src={pokemonDetails.image} alt={pokemonDetails.name} />
      <Link to="..">Voltar</Link>
    </div>
  );
};

export default PokemonDetails;
