<script>
	import Header from '$lib/Header.svelte';
	import Authenticate from '$lib/Authenticate.svelte'
	export let data = PageData
</script>

<h1>Hello and welcome to my site!</h1>
<a href="/about">About my site</a>

<Header />
{#if data.user}
     <p>Welcome, {data.user.email}</p>

	 <main>
		<h1>SvelteKit Hooks</h1>
		<p>Let's learn how the handle hook works in SvelteKit!</p>
		<div class="button-container">
			<a href="/protected/home" class="btn btn-secondary">Protected Home</a>
		</div>
		<div class="button-container">
			<form action="/protected/logout" method="POST">
				<button type="submit" class="btn btn-warning">Logout</button>
			</form>
		</div>
	</main>
{:else}
<Authenticate />
{/if}

