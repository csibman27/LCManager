import { mysqlconnFn } from "$lib/db/mysql";

// get request to database
export async function load() {
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
export async function post(request) {
  console.log(request);
  const { text, completed } = request.body;
  let newTask = await oceanbaseConnection
      .query('INSERT INTO tasks (text, completed) VALUES (?, ?)', [
          text,
          completed,
      ])
      .then(function ([result]) {
          return { id: result.insertId, text: text, completed: completed };
      });
  return {
      body: newTask,
    };
}
