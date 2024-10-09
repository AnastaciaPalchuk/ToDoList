class UserAlreadyExists extends Error{
    constructor(){
        super('User not found')
    }
}
module.exports = { UserAlreadyExists };