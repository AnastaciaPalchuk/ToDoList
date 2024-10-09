class Tasks{
    constructor(taskName, isDone,  id){
        this.taskName = taskName;
        this.isDone = isDone;
        this.id = id;
        this.date = new Date().toISOString();
    }
}
module.exports = { Tasks };