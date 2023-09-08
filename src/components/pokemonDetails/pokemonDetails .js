import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    </div>
  );
};

export default PokemonDetails;
