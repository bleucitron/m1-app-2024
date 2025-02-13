import { writeJSON, readJSON } from '$lib/io';

export async function addToPokedex(id: number) {
	const pokedex = await readJSON('pokedex').catch(() => []);

	if (!pokedex.includes(id)) {
		pokedex.push(id);
		return writeJSON('pokedex', pokedex);
	}
}
