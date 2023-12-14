import { redirect } from '@sveltejs/kit';
import adapter from '@sveltejs/adapter-auto'

let userLoggedIn = false;

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	if (event.route.id?.startsWith('/(auth)')) {
		// protected route for all in (auth) except then the home page
        if(!userLoggedIn) {
		//throw redirect(302, "/login")
        }
        return await resolve(event)
	}

	const response = await resolve(event)
	return response;
}

const config = {
    kit: {
        adapter: adapter(),
        methodOverride: {
            allowed: ['POST']
        },
    }
};

export function login() {
    userLoggedIn = true;
}

export default config;