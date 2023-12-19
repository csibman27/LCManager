<script lang="ts">
    import SignupForm from '$lib/SignupForm.svelte';
    import type { PageData } from './$types';
    import Filler from "$lib/Filler.svelte";
    export let data: PageData;

</script>

<Filler />
<SignupForm />