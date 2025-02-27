import { getPokemonFromDB } from '$lib/server/data';

export function load({ params }) {
	return {
		pokemon: getPokemonFromDB(parseInt(params.id))
	};
}
