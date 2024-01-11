<script>
    import Content from "$lib/Content.svelte";
    import Footer from "$lib/Footer.svelte";
    import MachineView from "$lib/MachineView.svelte";

    export let data;
    export let machines = [];
    console.log({ machines });
	//const { posts } = data;
    console.log(data)
</script>

<Content />

<MachineView />
  
<Footer />
  
