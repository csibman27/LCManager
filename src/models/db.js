import { userJsonStore } from "./json/user-json-store.js";



export const db = {
    userStore: null,
    messageStore: null,
  
    init(storeType) {
      switch (storeType) {
        case "json":
          this.userStore = userJsonStore;
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
  