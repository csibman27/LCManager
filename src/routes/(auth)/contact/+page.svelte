<script>
	export let data;
	const { posts } = data;
    console.log(posts)
</script>

<h1>Contact Page</h1>

<div class="container">
	<div class="grid">
		<h1>API Call Checkmk hosts</h1>

		<table id="servers">
				<th>Id</th>
                <th>Title</th>
			{#each posts.value as d }
				<tr>
					<td>{d.id}</td>
                    <td>{d.title}</td>
				</tr>          
                {/each}
		</table>
    <!-- {JSON.stringify(data)} -->
	</div>
</div>

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
