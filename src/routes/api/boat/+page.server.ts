import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ cookies }) => {

    const boatName = cookies.get('boatName');
    return {
        boatName
    };
}) satisfies PageServerLoad;