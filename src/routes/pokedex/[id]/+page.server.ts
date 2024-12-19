import { getPokemonFromDB } from '$lib/data';

export function load({ params }) {
	return {
		pokemon: getPokemonFromDB(parseInt(params.id))
	};
}
