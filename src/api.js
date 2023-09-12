export const searchPokemon = async (pokemon) => {
  try {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(apiUrl);
    return response.json();
  } catch (error) {
    console.log("Erro ao consultar a API:", error);
  }
};

export const getPokemon = async (limit = 30, offset = 0) => {
  try {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset${offset}`;
    const response = await fetch(apiUrl);
    return response.json();
  } catch (error) {
    console.log("Erro ao consultar a API:", error);
  }
};

export const getPokemonDetails = async (idOrName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${idOrName}`
    );
    if (!response.ok) {
      throw new Error(`Erro ao buscar detalhes do Pokémon: ${response.status}`);
    }
    const data = await response.json();
    const pokemonDetails = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((ability) => ability.ability.name),
      types: data.types.map((type) => type.type.name),
    };
    return pokemonDetails;
  } catch (error) {
    throw new Error(`Erro ao buscar detalhes do Pokémon: ${error.message}`);
  }
};
