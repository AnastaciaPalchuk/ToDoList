class AlreadyExists extends Error{
    constructor(){
        super('Task already exists')
    }
}
module.exports = { AlreadyExists };
   