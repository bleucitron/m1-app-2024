import { writeJSON, readJSON } from '$lib/server/io';

type User = {
    userName: string;
    password: string;
}

export function readUser() {
    return readJSON('user').catch(() => []) as Promise<User>;
}
export async function addUser(user: User) {
    return writeJSON('user', user);
}