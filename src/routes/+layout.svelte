<script>
    import {page} from "$app/stores"
    let routeId;
    $: routeId=$page.route.id;

    const nav = [
        { 
            title: "Home",
            href: "/"
        },
        {
            title: "Services",
            href: "/services"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Contact",
            href: "/contact"
        }
    ];
</script>

<div class='main-app'>
    <nav>
        <ul>
            {#each nav as {title, href }}
            <li>
                <a {href} class:active={ routeId === href} {title}>{title}</a>
            </li>
            {/each}
        </ul>
    </nav>
  <slot/>
  </div>
  
  
  <svelte:head>
      <style>
          body{
              margin:0;
          }
      </style>
  </svelte:head>
  
  
  
  <style>
          .main-app{
          margin: 0;
          background-color: #242424;
          color: #FFF;
          margin:0;
          background-color: #242424;
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
  
      }
  </style>