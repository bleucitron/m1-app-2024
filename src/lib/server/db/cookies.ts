import { writeJSON, readJSON } from '$lib/server/io';
import { randomBytes } from 'crypto';

export function readCookieMap() {
	return readJSON('userByCookie').catch(() => ({})) as Promise<{ [k: string]: string }>;
}
export async function addCookie(user: string, cookie: string) {
	const cookieMap = await readCookieMap();

	return writeJSON('userByCookie', {
		[cookie]: user,
		...cookieMap
	});
}

export function createRandomCookie() {
	const buffer = randomBytes(48);
	const token = buffer.toString('hex');
	return token;
}

// export async function checkUser(name: string, password?: string) {
// 	const users = await readUsers();
//
// 	const cookie = createRandomCookie();
//
// 	if (!(name in users) || password !== users[name].password) {
// 		throw new Error("Oupss y'a un probleme");
// 	}
// 	return { cookie };
// }
//
