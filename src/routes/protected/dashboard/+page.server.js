import { mysqlconnFn } from "$lib/db/mysql";

// get request to database
export async function load() {
  //const { serverID, userID, serverName, serverIP, serverOS, serverIdrac, serverDesc, dateManual, serverBackupTo, serverMonitoredWith, serverSupport, serverServices } = request.body;

  let mysqlconn = await mysqlconnFn();
  try {
    let results = await mysqlconn
      .query("SELECT * FROM server;")
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


// add to database post method
// this needs to be re-written
// export async function post(request) {
//   console.log(request);
//   const { text, completed } = request.body;
//   let newTask = await oceanbaseConnection
//       .query('INSERT INTO tasks (text, completed) VALUES (?, ?)', [
//           text,
//           completed,
//       ])
//       .then(function ([result]) {
//           return { id: result.insertId, text: text, completed: completed };
//       });
//   return {
//       body: newTask,
//     };
// }




// export async function load(request) {
//   const { serverID, userID, serverName, serverIP, serverOS, serverIdrac, serverDesc, dateManual, serverBackupTo, serverMonitoredWith, serverSupport, serverServices } = request.body;

//   let mysqlconn = await mysqlconnFn();
//   try {
//     let results = await mysqlconn
//       .query("SELECT * FROM server;")
//       .then(function ([rows, fields]) {
//                 console.log(rows);
//         return rows;
//       });
//   let newTask = await mysqlconn
//     .query('INSERT INTO server (serverID, userID, serverName, serverIP, serverOS, serverIdrac, serverDesc, dateManual, serverBackupTo, serverMonitoredWith, serverSupport, serverServices) VALUES (?, ?)', [
//       serverID,
//       userID,
//       serverName,
//       serverIP,
//       serverOS,
//       serverIdrac,
//       serverDesc,
//       dateManual,
//       serverBackupTo,
//       serverMonitoredWith,
//       serverSupport,
//       serverServices
//             ])
//             .then(function ([result]) {
//               return { id: result.insertId, text: text, completed: completed };
//             }); 

//     return {
//       data: results,
//     };
//   } catch (error) {
//     console.error("Got an error!!!");
//     console.log(error);
//     return error;
//   }
// }
