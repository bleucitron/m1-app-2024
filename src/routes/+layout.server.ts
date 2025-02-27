import { readCookieMap } from '$lib/server/db/cookies.js';
import { readPokedex } from '$lib/server/db/pokedex';
import { readUsers } from '$lib/server/db/user.js';

export async function load({ depends, cookies }) {
	depends('pokedex:all');
	const pokedex = await readPokedex();
	const cookie = cookies.get('userCookie');
	const cookieMap = await readCookieMap();

	const name = cookie ? cookieMap[cookie] : null;

	const userByName = await readUsers();

	return {
		pokedex,
		teamSize: 10,
		user: name ? userByName[name] : null
	};
}
