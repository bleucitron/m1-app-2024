import { readPokedex } from '$lib/db/pokedex';

export async function load({ depends }) {
	depends('pokedex:all');
	const pokedex = await readPokedex();

	return {
		pokedex,
		teamSize: 10
	};
}
