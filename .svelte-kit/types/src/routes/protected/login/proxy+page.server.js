// @ts-nocheck
import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';

/** */
export const actions = {
    default:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, request }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        if(email === "csibman@hotmail.com" && password === "test") {

        cookies.set("access", "true", { path: "/", sameSite:
    "strict" });
    goto("/home")
    }
    return {
        email,
        message: "Email or password is not valid",
    }}
}