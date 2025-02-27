import { addUser, checkUser } from '$lib/server/db/user.js';
import { fail } from '@sveltejs/kit';

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name_register')?.toString();
		const password = data.get('password_register')?.toString();
		const confirmPassword = data.get('confirmPassword_register')?.toString();
		console.log(name, password);

		if (!name)
			return fail(400, { message: "Il manque le nom d'utilisateur", name, field: 'name_register' });
		if (!password || password.length < 4)
			return fail(400, {
				message: "Le mot de passe n'existe pas ou il est trop court",
				name,
				field: 'password_register'
			});
		if (password !== confirmPassword)
			return fail(400, {
				message: 'Le mot de passe est différent dans les deux champs',
				name,
				field: 'confirmPassword_register'
			});
		try {
			await addUser({ name, password });
			return { success: true, name: null, field: null };
		} catch (error) {
			return fail(400, {
				message: error.message,
				name,
				field: 'name_register'
			});
		}
	},
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const name = data.get('name_login')?.toString();
		const password = data.get('password_login')?.toString();
		if (!name)
			return fail(400, { message: "Il manque le nom d'utilisateur", name, field: 'name_login' });
		try {
			const cookie = await checkUser(name, password);
			cookies.set('userCookie', cookie, { path: '/' });
			return { success: true, name: null, field: null };
		} catch (error) {
			return fail(400, {
				message: error.message,
				name,
				field: 'name_login'
			});
		}
	}
};
