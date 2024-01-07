<script lang="ts">
    import type { PageData } from './$types';
    import { enhance } from '$app/forms'
    
    export let data: PageData;
</script>

<h1>{data.boatName}</h1>

<form method="POST" use:enhance>

    <input type="text" name="boatName">
    <button type="submit">Submit</button>
</form>