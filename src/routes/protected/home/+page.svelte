<script>
    import Content from "$lib/Content.svelte";
    import Footer from "$lib/Footer.svelte";
    export let data;
</script>

<h1>Get User Information from MYSQL backend</h1>
<p>User List.</p>
<table> Name </table>
{#each data.data as state}
        <p>{state.userFirstName + ' ' + state.userLastName}</p>
{/each}
<style>
    button, p {
        padding: .5em .8em;
        margin: .5em;
        font-size: 110%;
    }
</style>


<Content />
  
<Footer />
  
