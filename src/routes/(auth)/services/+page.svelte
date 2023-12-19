<script>
	import Footer from '$lib/Footer.svelte';

	export let data;
	const { posts } = data;
</script>

<h1>Services Page</h1>

<div class="container">
	<div class="grid">
		<h1>API Call Servers sheet</h1>

		<table id="servers">
			<tr>
				<th>Id</th>
				<th>Name</th>
				<th>Server IP</th>
				<th>Services</th>
			</tr>
			{#each posts as { userId, server_name, server_ip, server_id, server_desc, server_idrac, server_os, server_services }}
				<tr>
					<td>{server_id}</td>
					<td>{server_name}</td>
					<td>{server_ip}</td>
					<td>{server_services[0].service_name}, {server_services[1].service_name}</td>
				</tr>{/each}
		</table>
	</div>
</div>

<Footer />

<style>
	#servers {
		font-family: Arial, Helvetica, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	#servers td,
	#servers th {
		border: 1px solid #ddd;
		padding: 8px;
	}

	#servers tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	#servers tr:hover {
		background-color: #ddd;
	}

	#servers th {
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: #04aa6d;
		color: white;
	}
</style>
