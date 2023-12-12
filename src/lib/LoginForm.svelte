<script>
  import { library, icon } from '@fortawesome/fontawesome-svg-core'
  import { faCamera } from '@fortawesome/free-solid-svg-icons'
  import { goto } from '$app/navigation';
	import { error } from '@sveltejs/kit';


// export function authenticateUser(email, password) {
//   const user = users.find(u => u.email === email && u.password === password);
//   if (user) {
//     const { id, role } = user;
//     const token = generateToken(id, role);
//     return { token, role };
//   }
//   return null;
// }
// function generateToken(userId, userRole) {
//   // Generate a JWT token here or use any authentication mechanism
// }

  // let email="";
  // let password="";

  //   async function login() {
      
  //     console.log(`attemting to log in email: ${email} with password: ${password}`);

  //     fetch('/login', {
  //       method: 'POST',
  //       body: JSON.stringify({ email, password }),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then(response => {
  //       if (response.ok) {
  //         //redirect user to home
  //         goto('/home');
  //       } else {
  //         // Display an error message
  //         alert('Invalid username or password');
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     })
  //   }

export const actions = {
  async create({ request }) {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    console.log({email, password});
  }
}

library.add(faCamera)

const camera = icon({ prefix: 'fas', iconName: 'camera' })
let x=1
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
            
            <form on:submit|preventDefault={login} style="width: 24rem;">
  
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