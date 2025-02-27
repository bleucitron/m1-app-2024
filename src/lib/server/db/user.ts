import { writeJSON, readJSON } from '$lib/server/io';

type User = {
	name: string;
	password: string;
};

export function readUsers() {
	return readJSON('userByName').catch(() => ({})) as Promise<{ [k: string]: User }>;
}
export async function addUser(user: User) {
	const users = await readUsers();
	if (user.name in users) {
		throw new Error("L'utilisateur existe déjà ");
	}
	return writeJSON('userByName', {
		[user.name]: user,
		...users
	});
}
export async function checkUser(name: string, password?: string) {
	const users = await readUsers();
	if (!(name in users) || (password !== users[name].password)) {
		throw new Error("Oupss y'a un probleme");
	}
	return { name }
}