import { readPokedex } from '$lib/server/db/pokedex';

export async function load({ depends, cookies }) {
	depends('pokedex:all');
	const pokedex = await readPokedex();
	const cookie = cookies.get('userCookie');
	const user = cookie ? { name: 'toto' } : null;

	return {
		pokedex,
		teamSize: 10,
		user,
	};
}
