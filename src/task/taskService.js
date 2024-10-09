const { UserNotFound } = require("../user/errors/UserNotFound");
const { AlreadyExists } = require("./errors/AlreadyExists");
const { NotFound } = require("./errors/NotFound");
const { Tasks } = require("./Tasks");


class TaskService{
    constructor(repository){
        this.repository = repository;
    }
    async addTask(userId, taskName, isDone){
        return this.repository.addTaskToList(userId, taskName, isDone);
        }
    
    async makeCompleted(userId, taskId){
        const findTask = await this.repository.findTask(userId, taskId)
        if(findTask.rows.length){
            return this.repository.makeTaskCompleted(userId, taskId)
        }
        else {
            throw new NotFound();    
        }
       
    }

     async getList(userId){
        return this.repository.getList(userId);
    }
}


module.exports = { TaskService };