<script>
	import Card from '$lib/Card.svelte';
	import Footer from '$lib/Footer.svelte';
	import Hero from '$lib/Hero.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { createEventDispatcher } from 'svelte';
	import InPlaceEdit from '$lib/InPlaceEdit.svelte';
  

	// Declare initial global titles
	let title = 'This is an editable title';
	let summary = 'This is some editable text';
	let summary1 = 'This is also an editable text';
	let titleList = 'Server List';
	let titleDash = 'Add New Machine';

	function submit(field) {
		return ({ detail: newValue }) => {
			// IRL: POST value to server here
			console.log(`updated ${field}, new value is: "${newValue}"`);
		};
	}

	const dispatch = createEventDispatcher(); // used to communicate with parent component

	let showModal = false; // determines if the modal is visible

	// function to toggle the modal visibility
	function toggleModal() {
		showModal = !showModal;
	}

	// handle close event and dispatch it to the parent component
	function handleClose() {
		toggleModal();

		dispatch('close');
	}

	let selectedItemId = null;

	function handleClick(uid) {
		selectedItemId = uid;
	}

	// Declare global and local variables
	let machines = [];
	let currentMachines = '';
	let uid = '';
	let name = '';
	let ip = '';
	let os = '';
	let idrac = '';
	let desc = '';
	let dateManual = '';
	let backupTo = '';
	let monitoredWith = '';
	let support = '';
	let services = [];

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
      dateManual: dateManual,
      backupTo: backupTo,
      monitoredWith: monitoredWith,
      support: support,
      services: services,
			date: date.toISOString() //date in ISO 8601 format.
		};
		machines.push(machine);
		machines = [...machines];
		name = '';
		ip = '';
		os = '';
		idrac = '';
		desc = '';

		console.log(machine);
	}

	addMachine(
		(name = 'Server1'),
		(ip = '192.168.89.11'),
		(os = 'ubuntu 22.04 LTS'),
		(idrac = '10.1.1.12'),
		(desc = 'services available')
	);
	addMachine(
		(name = 'Server2'),
		(ip = '192.168.89.1'),
		(os = 'ubuntu 20.04 LTS'),
		(idrac = '10.1.22.11'),
		(desc = 'services available this and that')
	);

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

<Hero
	title={'Lifecycle Manager'}
	subTitleHero={'"Optimizing Server Lifecycle Management in the Data Center: From Planning to Retirement"'}
/>

<div class="poll">
	<h3 class="text-2xl font-light">{titleDash}</h3>
</div>

<!-- Function Layout -->
<br />
<div class="grid grid-cols-3 gap-4">
	<div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Server Name</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="servername"><i class="fas fa-server text-gray-500"></i></label>
			<input
				bind:value={name}
				type="text"
				id="name"
				name="email"
				placeholder="Server Name"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
	<div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Ip Address</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="ip"><i class="fa-solid fa-globe text-gray-500"></i></label>
			<input
				bind:value={ip}
				type="text"
				id="ip"
				name="ip"
				placeholder="Ipv4 Address"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
	<div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Operating System</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="ip"><i class="fas fa-desktop text-gray-500"></i></label>
			<input
				bind:value={os}
				type="text"
				id="os"
				name="os"
				placeholder="Operating System"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
	<div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Idrac IP</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="ip"><i class="fa-solid fa-globe text-gray-500"></i></label>
			<input
				bind:value={idrac}
				type="text"
				id="idrac"
				name="idrac"
				placeholder="Idrac"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
	<div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Description</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="ip"><i class="fa-solid fa-info text-gray-500"></i></label>
			<input
				bind:value={desc}
				type="text"
				id="desc"
				name="desc"
				placeholder="Description"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
  <div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Description</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="ip"><i class="fa-solid fa-info text-gray-500"></i></label>
			<input
				bind:value={desc}
				type="text"
				id="desc"
				name="desc"
				placeholder="Description"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
  <div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Description</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="ip"><i class="fa-solid fa-info text-gray-500"></i></label>
			<input
				bind:value={desc}
				type="text"
				id="desc"
				name="desc"
				placeholder="Description"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
  <div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Description</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="ip"><i class="fa-solid fa-info text-gray-500"></i></label>
			<input
				bind:value={desc}
				type="text"
				id="desc"
				name="desc"
				placeholder="Description"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
  <div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Description</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="ip"><i class="fa-solid fa-info text-gray-500"></i></label>
			<input
				bind:value={desc}
				type="text"
				id="desc"
				name="desc"
				placeholder="Description"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
  <div>
		<label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Description</label
		>
		<div class="pl-2 border border-slate-300 rounded-md">
			<label for="ip"><i class="fa-solid fa-info text-gray-500"></i></label>
			<input
				bind:value={desc}
				type="text"
				id="desc"
				name="desc"
				placeholder="Description"
				class="px-2 py-2 w-96 border-0 focus:outline-0"
			/>
		</div>
	</div>
</div>
<br />

<button
	type="button"
	on:click={addMachine}
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Machine</button
>

<div class="mainContainer">
	<div class="headerContainer">
		<h2 class="text-2xl font-light">{titleList}</h2>
	</div>
	<table class="table is-fullwidth">
		<tr>
			<th>Index</th>
			<th>Server Name</th>
			<th>Ip Address</th>
			<th>OS</th>
			<th>Idrac</th>
			<th>Description</th>
			<th>Date Server Added</th>
			<th>Functions</th>
		</tr>

		{#each machines as machine, index}
			<tr>
				<td>{index + 1}.</td>
				<td><InPlaceEdit bind:value={machine.name} on:submit={submit('text')} /></td>
				<td><InPlaceEdit bind:value={machine.ip} on:submit={submit('text')} /></td>
				<td><InPlaceEdit bind:value={machine.os} on:submit={submit('text')} /></td>
				<td><InPlaceEdit bind:value={machine.idrac} on:submit={submit('text')} /></td>
				<td><InPlaceEdit bind:value={machine.desc} on:submit={submit('text')} /></td>
				<td>{machine.date}</td>
				<div class="actions">
					<!-- more info -->
					<i
						class:machine={selectedItemId === machine.uid ? 'selected' : ''}
						on:click={() => handleClick(machine.uid)}
						on:click={toggleModal}
						on:keydown={() => {}}
						class="fa-regular fa-map"
					/>
					<!-- save -->
					<i
						on:click={() => {
							editMachine(index);
						}}
						on:keydown={() => {}}
						class="fa-regular fa-floppy-disk"
					/>
					<!-- delete -->
					<i
						on:click={deleteMachine(machine.uid)}
						on:keydown={() => {}}
						class="fa-regular fa-trash-can"
					/>
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
				<p>{machines.find((machine) => machine.uid === selectedItemId).services}</p>
			{/if}
			<slot />
			<button on:click={handleClose}>Close</button>
		</div>
	</div>
{/if}

<Footer />

<style>
	.btn {
		bottom: 20px;
		position: sticky;
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
		gap: 25px;
		font-size: 1.5rem;
		margin-top: 5%;
	}
	.actions i:hover {
		color: coral;
	}
	.actions i {
		cursor: pointer;
	}
</style>
