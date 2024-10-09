class AuthRepository {
  constructor(database) {
    this.database = database;
  }

  async findUserByEmail(userEmail) {
    const result = await this.database.query(`
            SELECT *
            from "user"
            where email = '${userEmail}'
        `);
        return result.rows[0];
  }

  async createNewUser(userName, userSurname, userEmail, userPassword) {
    const toDoList = await this.database.query(`
            insert into to_do_list (description)
            VALUES ('description')
            returning *;
           `);

    return this.database.query(`
            insert into "user" (to_do_list_id, fname, lname, email, password)
            VALUES ('${toDoList.rows[0].id}', '${userName}','${userSurname}', '${userEmail}', '${userPassword}');
            `);
  }

}

module.exports = { AuthRepository };
