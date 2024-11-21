import pokemons from './pokemons.json';

export function getPokemonsFromDB() {
	return pokemons;
}

export function getPokemonFromDB(id: number) {
	return pokemons[id - 1];
}
