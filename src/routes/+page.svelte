<script>
  import Content from "../pages/Content/+page.svelte";
  import Footer from "../pages/Footer/+page.svelte";

  const getPosts = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    console.log(data);
    return data
  }
  getPosts();
</script>

<h1> Test front end </h1>

<Content />

<Footer />
