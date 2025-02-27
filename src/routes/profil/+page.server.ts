import { addUser } from '$lib/server/db/user.js';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const userName = data.get('userName')?.toString();
        const password = data.get('password')?.toString();
        console.log(userName, password)

        if (userName && password) addUser({ userName, password })
    }
};
