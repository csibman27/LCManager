// export const load = async () => {

//     const getPosts = async() => {
//       const res = await fetch("http://localhost:5173/api/posts.json");
//       const data = await res.json();
//       console.log(data);
//       const filteredData = data.slice(0, 3)
//       return filteredData 
//     }
//     return {
//         posts: getPosts(),
//     }
// }

import { json } from "@sveltejs/kit";
import { mysqlconnFn } from "$lib/db/mysql";


export async function load() {
    let mysqlconn = await mysqlconnFn();
    try {
      let results = await mysqlconn
        .query("SELECT * FROM user;")
        .then(function ([rows, fields]) {
                  console.log(rows);
          return rows;
        });
  
      return {
        data: results,
      };
    } catch (error) {
      console.error("Got an error!!!");
      console.log(error);
      return error;
    }
  }
