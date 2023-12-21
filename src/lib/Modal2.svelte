<!-- Modal.svelte -->
<div class="modal-container">
    <div class="modal-content">
        <h2>Selected Item: {selectedItem}</h2>
        <p>Additional information about {selectedItem}.</p>
        <button on:click={() => showModal = false}>Close</button>
    </div>
</div>

<style>
    .modal-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
    }
    
    .modal-content {
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        max-width: 500px;
        text-align: center;
    }
</style>