<script lang="ts">
    import type { PageData } from './$types';
    import { push } from "svelte-spa-router";
    import { getContext } from "svelte";

    export let data: PageData;

    let email = ""
    let password = "";
    let errorMessage = "";

    const placemarkService = getContext("PlacemarkService");
    //console.log(placemarkService);

    async function login() {
        //console.log(`attempting to log in email: ${email} with password: ${password}`)
        //let success = await lfService.login(email, password)
        //console.log(success);
        if (success) {
            push("/dashboard") // change view to dashboard
        } else {
            email = "";
            password = "";
            errorMessage = "Invalid Credentials";
        }
    }
    
</script>

<form on:submit|preventDefault={login}>
    <div class="field">
        <label class="label" for="email">Email</label>
        <input bind:value={email} class="input" id="email" name="email"placeholder="Enter email" type="text">
    </div>
    <div class="field">
        <label class="label" for="password">Password</label>
        <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password">
    </div>
    <div class="field is-grouped">
        <button class="button is-link">Log In</button>
    </div>
</form>
{#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
{/if}