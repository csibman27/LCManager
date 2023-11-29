<script>
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';

    async function login() {
        console.log(`attemting to log in email: ${email} with password: ${password}`);
        goto('/donate');
    }
    import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera)

const camera = icon({ prefix: 'fas', iconName: 'camera' })
</script>

<section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">
  
          <div class="px-5 ms-xl-4">

            <i class="fa-solid fa-server fa-2x me-3 pt-5 mt-xl-4" style="color: black;"></i>
            <h3 class="fw-normal mb-5 pb-3" style="letter-spacing: 1px;">Log in</h3>
          </div>
  
          <div class="flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            
            <form style="width: 24rem;">
  
              <div class="form-outline mb-4">
                <input type="email" id="form2Example18" class="form-control form-control-lg" />
                <label class="form-label" for="form2Example18">Email address</label>
              </div>
  
              <div class="form-outline mb-4">
                <input type="password" id="form2Example28" class="form-control form-control-lg" />
                <label class="form-label" for="form2Example28">Password</label>
              </div>
  
              <div class="pt-1 mb-4">
                <button class="btn btn-info btn-lg btn-block" type="button">Login</button>
              </div>
  
              <p class="text-center small mb-6 pb-lg-2"><a class="text-muted" href="https://bitwarden.com/">Forgot password? Use Password Manager</a></p>
              <p class="text-center">Don't have an account? <a href="/signup" class="link-info">Register here</a></p>
  
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>