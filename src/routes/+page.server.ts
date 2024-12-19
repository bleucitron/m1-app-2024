import { getPokemonsFromDB } from '$lib/data';

export function load() {
	return {
		pokemons: getPokemonsFromDB()
	};
}
