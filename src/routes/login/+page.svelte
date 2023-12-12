<script>
  import { library, icon } from '@fortawesome/fontawesome-svg-core'
  import { faCamera } from '@fortawesome/free-solid-svg-icons'
	import Filler from '$lib/Filler.svelte';
  export let form;

  export let Login;

library.add(faCamera)

const camera = icon({ prefix: 'fas', iconName: 'camera' })
console.log(form)
</script>

<Filler />

<section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">
  
          <div class="px-5 ms-xl-4">

            <i class="fa-solid fa-server fa-2x me-3 pt-5 mt-xl-4" style="color: black;"></i>
            <h3 class="fw-normal mb-5 pb-3" style="letter-spacing: 1px;">Log in</h3>
          </div>
  
          <div class="flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            
            {#if form?.message}
            <p class=red>{form.message}</p>
            {/if}
            <form method="POST" style="width: 24rem;">
  
              <div class="form-outline mb-4">
                <input type="email" name ="email" id="email" class="form-control form-control-lg" />
                <label class="form-label" for="email">Email address</label>
              </div>
  
              <div class="form-outline mb-4">
                <input type="password" name="password" id="password" class="form-control form-control-lg" />
                <label class="form-label" for="password">Password</label>
              </div>
  
              <div class="pt-1 mb-4">
                <button class="btn btn-info btn-lg btn-block" type="submit">Login</button>
              </div>
  
              <p class="text-center small mb-6 pb-lg-2"><a class="text-muted" href="https://bitwarden.com/">Forgot password? Use Password Manager</a></p>
              <p class="text-center">Don't have an account? <a href="/signup" class="link-info">Register here</a></p>
  
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

<style>
  .red {
    color: red;
  }
</style>