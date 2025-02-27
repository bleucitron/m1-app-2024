import { getPokemonsFromDB } from '$lib/server/data';

export function load() {
	return {
		pokemons: getPokemonsFromDB()
	};
}
