import { addUser } from '$lib/server/db/user.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const password = data.get('password')?.toString();
		const confirmPassword = data.get('confirmPassword')?.toString();
		console.log(name, password);

		if (!name)
			return fail(400, { message: "Il manque le nom d'utilisateur", name, field: 'userName' });
		if (!password || password.length < 4)
			return fail(400, {
				message: "Le mot de passe n'existe pas ou il est trop court",
				name,
				field: 'password'
			});
		if (password !== confirmPassword)
			return fail(400, {
				message: 'Le mot de passe est différent dans les deux champs',
				name,
				field: 'confirmPassword'
			});
		try {
			await addUser({ name, password });

			return { success: true, name, field: null };
		} catch (error) {
			return fail(400, {
				message: error.message,
				name,
				field: 'name'
			});
		}
	}
};
