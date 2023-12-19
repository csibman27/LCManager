<script>
	import Footer from '$lib/Footer.svelte';
    import { onMount, onDestroy } from 'svelte';
  
    let machines = [];
    let newMachine = { 
        uid: '',
        server_name: '',
        server_ip: '',
        server_desc: '',
        server_os: '',
        server_idrac: '',
        server_services: []
    };
  
    // Simulated API call to fetch initial machine list
    const fetchMachines = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const initialMachines = [
            { uid: 1, server_name: 'RonaldOpenstack', server_ip: '192.168.1.1' },
            { uid: 2, server_name: 'Cloud-Event-Holder', server_ip: '193.11.911.119' },
            { uid: 3, server_name: 'WestServ-11', server_ip: '132.0.111.43' }
          ];
          resolve(initialMachines);
        }, 1000);
      });
    };
  
    // Lifecycle hook for initial data fetch
    onMount(async () => {
      machines = await fetchMachines();
    });
  
    // Lifecycle hook for cleanup
    onDestroy(() => {
      // Execute any cleanup tasks here
    });
  
    // Function to add a new machine
    const addMachine = () => {
      machines = [
        ...machines,
        {
            uid: machines.length + 1,
            server_name: newMachine.server_name,
            server_ip: newMachine.server_ip,
            server_desc: newMachine.server_desc,
            server_os: newMachine.server_os,
            server_idrac: newMachine.server_idrac,
            server_services: newMachine.server_services
        }
      ];
      newMachine = {
        uid: '',
        server_name: '',
        server_ip: '',
        server_desc: '',
        server_os: '',
        server_idrac: '',
        server_services: [],
        };
    };
    
    // Function to update a machine
    const updateMachine = (uid, newName, newType, newDesc, newOs, newIdrac, newServices) => {
      machines = machines.map((machine) =>
        machine.uid === uid ? { ...machine,
            server_name: newName,
            server_ip: newType,
            server_desc: newDesc,
            server_os: newOs,
            server_idrac: newIdrac,
            server_services: newServices
        } : machine
      );
    };
  
    // Function to delete a machine
    const deleteMachine = (uid) => {
      machines = machines.filter((machine) => machine.uid !== uid);
    };
  </script>
  
  <main class="section">
    <div class="container">
        <h1 class="title"><center>Dashboard</center></h1>
    </div>
        
    <h2 class="title">Machine List</h2>
  
    <div class="box">
      <h2 class=title>Add New Machine</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label"> Server Name </label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control"><input class="input" type="text" placeholder="Server Name" bind:value="{newMachine.server_name}" />
                    </p>
                </div>
            </div>
        </div>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label"> Server IP </label>
    </div>
    <div class="field-body">
        <div class="field">
            <p class="control"><input class="input" type="text" placeholder="Server IP" bind:value="{newMachine.server_ip}" />
            </p>
        </div>
        <div class="pt-1 mb-4">
            <button on:click="{addMachine}"type="submit" class="btn btn-primary">Add Machine</button>
          </div>
    </div>
    <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Server Name</th>
            <th scope="col">Server IP</th>
            <th scope="col">Server Description</th>
            <th scope="col">Server OS</th>
            <th scope="col">Server Idrac</th>
            <th scope="col">Server Services</th>
            <th scope="col">FUNCTIONS</th>
          </tr>
            <p></p>
        </thead>
        <tbody>
            {#each machines as machine (machine.uid)}
          <tr>
            <th scope="row">1</th>
            
            <td>{machine.server_name}</td>
            <td>{machine.server_ip}</td>
            <td>{machine.server_desc}</td>
            <td>{machine.server_desc}</td>
            <td>{machine.server_desc}</td>
            <td>{machine.server_desc}</td>
            <button type="button" class="btn btn-outline-info btn-sm" on:click="{() => updateMachine(machine.uid, machine.server_name, machine.server_ip)}">Update</button>
          <button type="button" class="btn btn-outline-danger btn-sm" on:click="{() => deleteMachine(machine.uid)}">Delete</button>
          </tr>
          {/each}  
        </tbody>
        
      </table>
      
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
  </main>

  <Footer />


  