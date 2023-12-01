// const getPost = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const data = await res.json();
//     console.log(data);
//     return data
//   }
//   getPost();

// Example using axios
// const axios = require('axios');

// const config = {
//   headers: {
//     Authorization: 'Bearer <automation_secret>',
//   },
// };

// axios.get('http://hostname/mysite/check_mk/api/1.0/hosts', config)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// Querry Version of checkmk
export const load = async () => {
const getPosts = async() => {

    let username = ""
    let pwd = ""
    const config = {
        headers: {
            Authorization: 'Bearer {{username}} {{pwd}}',
        },
    };
    
    const res = await fetch("http://checkmk.walton/walton/check_mk/api/1.0/domain-types/host_config/collections/all", config);
    const data = await res.json();
    console.log(data);
    return data
   }
   return {
       posts: getPosts(),
   }
}

// // Querry Version of checkmk
// export const loading = async () => {
//     const getPosts = async() => {
    
//         const config = {
//             headers: {
//                 Authorization: 'Bearer tmolnar 5k94wV2SQKK65JB$56',
//             },
//         };
        
//         const res = await fetch("http://checkmk.walton/walton/check_mk/api/1.0/domain-types/host_config/collections/all", config);
//         const data = await res.json();
//         console.log(data);
//         return data
//        }
//        return {
//            posts: getPosts(),
//        }
//     }