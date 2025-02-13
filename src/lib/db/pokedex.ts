import { writeJSON, readJSON } from '$lib/io';

export function readPokedex() {
	return readJSON('pokedex').catch(() => []) as Promise<number[]>;
}
export async function addToPokedex(id: number) {
	const pokedex = await readPokedex();

	if (!pokedex.includes(id)) {
		pokedex.push(id);
		return writeJSON('pokedex', pokedex);
	}
}
