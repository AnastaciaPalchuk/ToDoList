class WrongCredentials extends Error{
    constructor(){
        super('WrongCredentials')
    }
}
module.exports = { WrongCredentials };