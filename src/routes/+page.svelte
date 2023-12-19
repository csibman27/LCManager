<script>
	import Header from '$lib/Header.svelte';
	import dc from "$lib/assets/dc.jpg";
</script>

<Header />

<div class="columns is-vcentered content">
	<div class="column has-text-centered">
		<img src={dc} width="700" alt="img" />
	</div>
	<div class="column">
		<h1 class="title">Conent of Login</h1>
		<p>Some Introduction what is the purpose of this app and who we are</p>
	</div>
</div>
