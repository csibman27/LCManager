<style>
    a{
        text-decoration: none;
        color: #879ed9;
    }
    a:hover{
        text-decoration: underline;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        margin-right: 20px;
    }
</style>

<script>
  import Title from "../pages/Title/+page.svelte";
</script>

<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/services">Services</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
</nav>

<h1>Welcome to Test frontend and backend</h1>



<Title />
