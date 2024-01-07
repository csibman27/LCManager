<script>
  import { createEventDispatcher } from "svelte";
    
    let detailTitle = "Edit function and detailed information of this particular machine";
    export let href;
    export let machines;
    export let machine;
    export let selectedItem;
    /**
	 * @type {{ name: any; desc: any; }}
	 */
     export let selectedMachine;
     
  
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
</script>


<div>
    <h1 class="title"> Detailed View </h1>
    <div class="box">
        <div>
            <h2 class="title">{detailTitle}</h2>
            <p>A pargraph here to tell how the detailed view works and what to expect.</p>
        </div>
    </div>
</div>

<div>
    <h1 class="title"> Machine View </h1>
    <div class="box">
        <div>
            <div class="card">
                <a href="{href}">Mac</a>
                
            </div>
        </div>
    </div>
</div>



<!-- Modal -->
<h2> Modal </h2>
{#if showModal}
  <div class="modal">
    <div class="modal-content">
      <p>{selectedItem}</p>
      <slot />
      <button on:click={handleClose}>Close</button>
    </div>
  </div>
{/if}

<button on:click={toggleModal}>Open Modal</button>

<style>
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
</style>