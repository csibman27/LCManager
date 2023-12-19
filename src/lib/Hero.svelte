<script>
    export let title = '';
    export let subTitleHero = '';
</script>
<div class = "hero">
    <div class = "container">
    <h2> {title} </h2>
    <p> {subTitleHero} </p>
  </div>
</div>

<style>
.hero {
    padding: 5em 0;
    background-color: #ADD8E6;
    color: #000;
    text-align: center;
    width: 100%;
}

h2 {
    margin: 0;
    font-size: 2em;
}


</style>