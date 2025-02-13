import { json } from '@sveltejs/kit';
import { addToPokedex } from '$lib/db/pokedex';
import { readJSON } from '$lib/io';

export async function GET() {
	const data = await readJSON('pokedex');
	return json(data);
}

export async function POST({ request }) {
	const payload = await request.json();

	await addToPokedex(payload.id);

	return new Response();
}
