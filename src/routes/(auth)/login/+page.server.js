import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        if(email === "csibman@hotmail.com" && password === "1") {

        cookies.set("access", "true", { path: "/", sameSite:
    "strict" });
    goto("/home")
    }
    return {
        email,
        message: "Email or password is not valid",
    }}
}