<script>
	import Card from '$lib/Card.svelte';
	import Footer from '$lib/Footer.svelte';
	import Hero from '$lib/Hero.svelte';
  import { v4 as uuidv4 } from 'uuid';
  import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher(); // used to communicate with parent component
    
    let showModal = false; // determines if the modal is visible
    
    // function to toggle the modal visibility
    function toggleModal() {
      showModal = !showModal;
    }
    
    // handle close event and dispatch it to the parent component
    function handleClose() {
      toggleModal();
      
      dispatch("close");
    }

    let titleDash = "Add New Machine"
    let selectedItemId = null;

    function handleClick(uid) {
       selectedItemId = uid;
    }


    
// Declare global and local variables
let machines = [];
let currentMachines = "";
let uid = "";
let name = "";
let ip = "";
let os = "";
let idrac = "";
let desc = "";


const date = new Date();
// Function for add a machine
function addMachine() {
    const machine = {
        uid: uuidv4(), // machines.length + 1,
        name: name,
        ip: ip,
        os: os,
        idrac: idrac,
        desc: desc,
        date: date.toISOString() //date in ISO 8601 format.
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

addMachine(name = "Server1", ip = "192.168.89.11", os = "ubuntu 22.04 LTS", idrac= "10.1.1.12", desc="services available")
addMachine(name = "Server2", ip = "192.168.89.1", os = "ubuntu 20.04 LTS", idrac= "10.1.22.11", desc="services available this and that")


// Delete a machine from the list
const deleteMachine = (id) => {
    if (confirm('Are you sure you want to delete this machine?')) {
      machines = machines.filter((machine) => machine.uid !== id);
    }
  };


// Edit a machine of the list
function editMachine(index) {
  let newMachines = [...machines].filter((val, i) => {
    console.log(i, index, i !== index);
    return i !== index;

  });
  currentMachines = machines[index];
  machines = newMachines;
}



</script>
<style>
  .btn {
    bottom: 20px;
    position:sticky;
  }
  /* Modal styles */
  .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 1.4rem;
    }
    .actions i:hover {
      color: coral;
    }
    .actions i {
      cursor: pointer;
    }
</style>

<Hero title={'Lifecycle Manager'} subTitleHero={'"Optimizing Server Lifecycle Management in the Data Center: From Planning to Retirement"'} />

<div class="poll">
<h3> {titleDash} </h3>
</div>

<!-- Function Layout -->
<Card>
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
<br>
<button type="button" on:click={addMachine} class="btn btn-primary">Add Machine</button>
</div>

</Card> 
  
  <div class="mainContainer">
    <div class="headerContainer">
      <h2>Server List</h2>
      <button>
        <i class="fa-regular fa-floppy disk" />
        <p>Save</p>
      </button>
    </div>
    <table class="table is-fullwidth">
      <tr>        
        <th>Server Name</th>
        <th>Ip Address</th>
        <th>OS</th>
        <th>Idrac</th>
        <th>Description</th>
        <th>Date Server Added</th>
      </tr>
    
      {#each machines as machine, index}
      <tr>
        <td>{index + 1}. {machine.name}</td>
        <td>{machine.ip}</td>
        <td>{machine.os}</td>
        <td>{machine.idrac}</td>
        <td>{machine.desc}</td>
        <td>{machine.date}</td>
        <div class="actions">
        <!-- more info -->
        <i class:machine={selectedItemId === machine.uid ? 'selected' : ''}
        on:click={() => handleClick(machine.uid)} on:click={toggleModal}
        on:keydown={() => {}}
        class="fa-regular fa-map"/>
        <!-- edit -->
        <i on:click={() => {
          editMachine(index);
        }}
        on:keydown={() => {}}
        class="fa-regular fa-pen-to-square" />
        <!-- delete -->
        <i on:click={deleteMachine(machine.uid)}
        on:keydown={() => {}}
        class="fa-regular fa-trash-can" />
        <!-- <button class="button" on:click={deleteMachine(machine.uid)}>Delete</button> -->
      </div>
      </tr>
      {/each}
    </table>

</div>

  
  <!-- Modal for pop up menu-->
  {#if showModal}
    <div class="modal">
      <div class="modal-content">
        {#if selectedItemId !== null}
        <h2>More Information:</h2>
        <p>{machines.find(machine => machine.uid === selectedItemId).services}</p>
        {/if}
        <slot />
        <button on:click={handleClose}>Close</button>
      </div>
    </div>
  {/if}
  
  




<Footer />