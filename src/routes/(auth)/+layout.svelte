<script>
    import {page} from "$app/stores"
    import Hero from "../../lib/Hero.svelte";
    let routeId;
    $: routeId=$page.route.id;

    const nav = [
        { 
            title: "Home",
            href: "./home"
        },
        {
            title: "Services",
            href: "./services"
        },
        {
            title: "About",
            href: "./about"
        },
        {
            title: "Contact",
            href: "./contact"
        }
    ];
</script>

<div class='main-app'>
    <nav>
        <h1>LCManager</h1>
        <ul>
            {#each nav as {title, href }}
            <li>
                <a {href} class:active={ routeId === href} {title}>{title}</a>
            </li>
            {/each}
        </ul>
    </nav>
    <Hero />
    <slot/>
  </div>

  <svelte:head>
    <title>LCManager</title>
    <meta name="description" content="Final-Project of HDIP22">
    <style>
        body{
            margin:0;
        }
    </style>
</svelte:head>
  
  <style>
          .main-app{
          margin: 0;
          background-color: white;
          color: black;
          margin:0;
          background-color: white;
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
      }
      ul {
        display: flex;
        margin: 1;
        margin-left: auto;
        margin-right: 100px;
        list-style: none;
      }
      li {
        margin-right: 60px;
        margin-top: 10px;
      }
      nav {
        display: flex;
        background-color: #212529;
        width: 100vw;
      }
      h1 {
        margin: 1;
        font-size: 1.3em;
        font-weight: normal;
        color: #ADD8E6;
        margin-left: 40px;
        margin-top: 10px;
      }
  </style>