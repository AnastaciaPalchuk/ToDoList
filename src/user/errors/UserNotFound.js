class UserNotFound extends Error{
    constructor(){
        super('User not found')
    }
}
module.exports = { UserNotFound };
   