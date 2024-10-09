class ToDoList{
    list = [];

    addTask(task){
        this.list.push(task);
        return this.list;
    }
}
module.exports = { ToDoList };