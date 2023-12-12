// @ts-nocheck
import { redirect } from '@sveltejs/kit';

/** */
export const actions = {
    default:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, request }) => {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");

        if(email === "csibman@hotmail.com" && password === "1") {

        cookies.set("access", "true", { path: "/", sameSite:
    "strict" });
    throw redirect(302, "/home");
    }
    return {
        email,
        message: "Email or password is not valid",
    }}
}