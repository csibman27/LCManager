import { v4 } from "uuid";

let records = [];

export const recordMemStore = {
  async getAllRecords() {
    return records;
  },

  async addRecord(record) {
    record._id = v4();
    records.push(record);
    return record;
  },

  async getRecordById(id) {
    return records.find((record) => record._id === id);
  },

  async deleteRecordById(id) {
    const index = records.findIndex((record) => record._id === id);
    records.splice(index, 1);
  },

  async deleteAllRecords() {
    records = [];
  },
};