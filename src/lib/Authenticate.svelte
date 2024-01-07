<script>
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
library.add(faCamera)

let email = "";
let password = "";
let error = false;

function handleAuthenticate() {
    if(!email || !password) {
        error = true
        return
    }
}
  
const camera = icon({ prefix: 'fas', iconName: 'camera' })
  
</script>
  
  <section class="containerAuth">
      <div class="container-a">
        <div class="row">
          <div class="col-sm-6 text-black">
    
            <div class="px-5 ms-xl-4">
  
              <i class="fa-solid fa-server fa-2x me-3 pt-5 mt-xl-4" style="color: black;"></i>
              <h3 class="fw-normal mb-5 pb-3" style="letter-spacing: 1px;">Log in</h3>
            </div>
    
            <div class="flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              
              
              <form action="?/login"method="POST" style="width: 24rem;">

                {#if error}
                <p class="error">Invalid Information</p>
                {/if}
                <div class="form-outline mb-4">
                  <p class={email ? ' above' : ' center'}>Email</p>
                  <input bind:value={email} type="email" name ="email" id="email" placeholder="Email" class="form-control form-control-lg" />
                </div>
    
                <div class="form-outline mb-4">
                  <p class={password ? ' above' : ' center'}>Password</p>
                  <input bind:value={password} type="password" name="password" id="password" placeholder="Password" class="form-control form-control-lg" />
                </div>
    
                <div class="pt-1 mb-4">
                  <button class="btn btn-info btn-lg btn-block" type="submit">Login</button>
                </div>
    
                <p class="text-center small mb-6 pb-lg-2"><a class="text-muted" href="https://bitwarden.com/">Forgot password? Use Password Manager</a></p>
                <!-- <p class="text-center">Don't have an account? <a href="/signup" class="link-info">Register here</a></p> -->
    
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  <style>
    .error {
      color: red;
    }
    .containerAuth {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 400px;
        margin: 0 auto;
    }
    form input {
        width: 100%;
    }
    .above,
    .center {
        position: absolute;
        transform: translateY(-50%);
        pointer-events: none;
        color: grey;
        border-radius: 4px;
        padding: 0 6px;
        font-size: 0.8rem;
    }
    .above {    
        background: #c6fffb;
        border: 1px solid white;
        font-size: 0.7rem;
    }
    .center {
        top: 50%;
        left: 6px;
        border: 1px solid transparent;
        opacity: 0;
    }
  </style>