<script lang="ts">
	import LoginForm from "$lib/LoginForm.svelte";
  import type { PageData } from './$types';
  import Filler from "$lib/Filler.svelte";  
  export let data: PageData;
  
</script>

<Filler />
<LoginForm />

