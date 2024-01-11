<script>
	
    export let machines = [];
	export let items = [];

	// Values that are passed in as props
	// are immediately available
	console.log({ machines });
</script>

<h1> Detailed view of </h1>
<p>{machines}</p>

<h1> Another view of </h1>
<p>{machines}</p>
<div>
	<ul>
		<!-- {#each machines as machine}
			<li>{machine}</li>
		{/each} -->
	</ul>
</div>



