import { addUser } from '$lib/server/db/user.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const userName = data.get('userName')?.toString();
		const password = data.get('password')?.toString();
		const confirmPassword = data.get('confirmPassword')?.toString();
		console.log(userName, password);

		if (!userName) return fail(400, { message: "Il manque le nom d'utilisateur" });
		if (!password || password.length < 4)
			return fail(400, { message: "Le mot de passe n'existe pas ou il est trop court" });
		if (password !== confirmPassword)
			return fail(400, { message: 'Le mot de passe est différent dans les deux champs' });

		addUser({ userName, password });

		return { success: true };
	}
};
