const { Client } = require('pg');

class DataBase {
  constructor() {
     this.client = new Client({
      user: "root",
      password: "password",
      database: "postgres",
      host: "localhost",
      port: 5432,
    });
  }

  users = [];

  async connect() {
    await this.client.connect();
  }

  async query(sql) {
    return this.client.query(sql)
  }
}

module.exports = new DataBase();
