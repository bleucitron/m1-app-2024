import { readPokedex } from '$lib/server/db/pokedex';

export async function load({ depends }) {
	depends('pokedex:all');
	const pokedex = await readPokedex();

	return {
		pokedex,
		teamSize: 10
	};
}
