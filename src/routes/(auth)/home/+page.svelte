<script>
    import Content from "$lib/Content.svelte";
    import Footer from "$lib/Footer.svelte";
    import { v4 as uuidv4 } from 'uuid';
    import Hero from "$lib/Hero.svelte"
    import Card from "$lib/Card.svelte"
	  import Button from "$lib/Button.svelte";

    export let data;
	  const { posts } = data;
    let title1 = "Add New Machine"

    
    // Declare global and local variables
    let machines = [];
    let uid = "";
    let name = "";
    let ip = "";
    let os = "";
    let idrac = "";
    let desc = "";
    
    // Function for add a machine
    function addMachine() {
        const machine = {
            uid: uuidv4(), // machines.length + 1,
            name: name,
            ip: ip,
            os: os,
            idrac: idrac,
            desc: desc,
            date: new Date().toLocaleString("en-IE"),
        };
        machines.push(machine);
        machines = [...machines];
        name = "";
        ip = "";
        os = "";
        idrac = "";
        desc = "";
        
        console.log(machine)
}
function deleteMachine(id) {
    const found = machines.findIndex((machine) => machine.uid == id);
    const done = machines[found];
    machines.splice(found, 1);
    machines = [...machines];
    
  }

  addMachine(name = "Server1", ip = "192.168.89.11", os = "ubuntu 22.04 LTS", idrac= "10.1.1.12", desc="services available")
  addMachine(name = "Server2", ip = "192.168.89.1", os = "ubuntu 20.04 LTS", idrac= "10.1.22.11", desc="services available this and that")

  function submit(field) {
		return ({detail: newValue}) => {
			// IRL: POST value to server here
			console.log(`updated ${field}, new value is: "${newValue}"`)
		}
	}
  
</script>

<Hero title={'Lifecycle Manager'} subTitleHero={'"Optimizing Server Lifecycle Management in the Data Center: From Planning to Retirement"'} />


<h1 class="title">
    Add a Server
</h1>
<Card>
  <div class="poll">
    <h3> {title1} </h3>
  </div>
</Card>


<!-- Function Layout -->
<div class="section box">
<div class="field">
    <label for="name" class="label">Server Name</label>
    <div class="control has-icons-left has-icons-right">
      <input bind:value={name} id="name" class="input" type="text" placeholder="Server Name">
      <span class="icon is-left">
        <i class="fas fa-server"></i>
      </span>
      <span class="icon is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>
  
  <div class="field">
    <label for="ip" class="label">Ipv4 Address</label>
    <div class="control has-icons-left has-icons-right">
      <input bind:value={ip} id="ip" class="input" type="text" placeholder="Ipv4 Address">
      <span class="icon is-left">
        <i class="fa-solid fa-globe"></i>
      </span>
      <span class="icon is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>
  
  <div class="field">
    <label for="os" class="label">Operating System</label>
    <div class="control has-icons-left has-icons-right">
      <input bind:value={os} id="os" class="input" type="text" placeholder="OS">
      <span class="icon is-left">
        <i class="fa-solid fa-globe"></i>
      </span>
      <span class="icon is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label for="idrac" class="label">Idarc</label>
    <div class="control has-icons-left has-icons-right">
      <input bind:value={idrac} id="idrac" class="input" type="text" placeholder="Idrac">
      <span class="icon is-left">
        <i class="fa-solid fa-globe"></i>
      </span>
      <span class="icon is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label for="desc" class="label">Description</label>
    <div class="control has-icons-left has-icons-right">
      <input bind:value={desc} id="desc" class="input" type="text" placeholder="Description">
      <span class="icon is-left">
        <i class="fa-solid fa-globe"></i>
      </span>
      <span class="icon is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>

  <button on:click={addMachine} class="button">Add Machine</button> 
</div>



  <!-- List layout -->

  <div class="section box">
    <div class="name is-6">List of Machines</div>
    <table class="table is-fullwidth">
      <Card>
      <thead>
        <th>Server Name</th>
        <th>Ip Address</th>
        <th>OS</th>
        <th>Idrac</th>
        <th>Description</th>
        <th>Date Server Added</th>
      </thead>
      
      <tbody>
        {#each machines as machine}
        <tr on:click={deleteMachine(machine.uid)}>
            <td> {machine.name} </td>
            <td> {machine.ip} </td>
            <td> {machine.os} </td>
            <td> {machine.idrac} </td>
            <td> {machine.desc} </td>
            <td> {machine.date} </td>
            <button on:click={deleteMachine(machine.uid)} class="button">delete</button>
        </tr>
        {/each}
      </tbody>
      </Card>
    </table>
  </div>





  
<Content />
  
<Footer />
  
