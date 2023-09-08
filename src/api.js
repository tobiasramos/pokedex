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
