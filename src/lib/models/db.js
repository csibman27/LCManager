/*
The mem-store modules implement CRUD (Create/Read/Update/Delete) on users and playlists using simple in-memory
Javascript arrays. These stores are not persistent - all values are lost when the application restarts.

The db.js module serves as s simple “gateway” or “Façade” to the models, which are made available via the db object.
*/

import { userJsonStore } from "./json/user-json-store.js";
import { userMemStore } from "./memsotre/user-mem-store.js";



export const db = {
    userStore: null,
    messageStore: null,
  
    init(storeType) {
      switch (storeType) {
        case "memstore":
          this.userStore = userMemStore;
          break;
        case "json":
          //this.userStore = userJsonStore;
          break;
        case "mongo":
          //this.userStore = userMongoStore;
          //connectMongo();
          break;
        default:
          //this.userStore = userMemStore;
      }
    },
  };
  