class UserRepository {
    constructor(database) {
      this.database = database;
    }

    async findUserById(userId) {
        return this.database.query(`
            select *
            from "user"
            where "user".id = ${userId};
    `)
    
    }
}


module.exports = { UserRepository };
