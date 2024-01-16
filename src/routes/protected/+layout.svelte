<svelte:head>	

<title>LCManager</title>
    <meta name="description" content="Final-Project of HDIP22">
    <style>
        body{
            margin: 0;
        }
    </style>
</svelte:head>

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
            title: "Dashboard",
            href: "./dashboard"
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
        },
    ];
  // Dropdown menu tailwind style

  let isDropdownOpen = false // default state (dropdown close)

  const handleDropdownClick = () => {
    isDropdownOpen = !isDropdownOpen // togle state on click
  }

  const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
    // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
    if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null) 
    isDropdownOpen = false
  }
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
        <!-- <h2 class="h2menu">
            <i class="fa-solid fa-user-gear"></i>
        </h2> -->

        <div class="flex justify-between items-center">
            <div class="dropdown" on:focusout={handleDropdownFocusLoss}>
                <button class="btn m-1" on:click={handleDropdownClick} >
                {#if isDropdownOpen}
                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="inline-block h-6 w-6 stroke-current">
                                        <title>Close Dropdown</title>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                    {:else}
                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        class="inline-block h-6 w-6 stroke-current">
                                        <title>Open Dropdown</title>
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                    {/if}
                </button>
                <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" style:visibility={isDropdownOpen ? 'visible' : 'hidden'}>
                    <li><button class="btn text-slate-300">User Privileges</button></li>
                    <li><button class="btn text-slate-300">Logout</button></li>
                </ul>
            </div>
            <p class="text-slate-300">
                <!-- isDropdownOpen: {isDropdownOpen} -->
            </p>
        </div>
        
    </nav>
    <!-- <Hero /> -->
    <slot/>
  </div>
  
  <style>
          .main-app{
          margin: 0;
          background-color: white;
          color: black;
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
        margin-left: 50px;
        margin-right: 100px;
        list-style: none;
      }
      li {
        margin-right: 60px;
        margin-top: 10px;
      }
      nav {
        display: flex;
        background-color: #036ad1;
        /* width: 100vw; */
      }
      h1 {
        margin: 1;
        font-size: 1.3em;
        font-weight: normal;
        color: #ADD8E6;
        margin-left: 40px;
        margin-top: 10px;
      }
      .h2menu {
        display: flex;
        width: 70px;
        margin-top: 5px;

      }
  </style>