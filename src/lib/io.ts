import { readFile, writeFile } from 'fs/promises';

const basePath = 'data/';

export async function readJSON(path: string) {
	const s = await readFile(basePath + path + '.json');

	return JSON.parse(s.toString());
}

export function writeJSON(path: string, data: unknown) {
	return writeFile(basePath + path + '.json', JSON.stringify(data));
}
