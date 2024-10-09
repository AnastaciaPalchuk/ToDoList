const { UserNotFound } = require("./errors/UserNotFound");

class UserService{
    constructor(database){
        this.database = database;
    }

    async findUser(userId){
        let thisUser = await this.database.findUserById(userId);
        if(thisUser.rows.length){
            return thisUser.rows;
        }
        else{
            throw new UserNotFound();
        }
    }
}

module.exports = { UserService };