class TaskRepository {
  constructor(database) {
    this.database = database;
  }

  async addTaskToList(userId, taskName, isDone) {
    const userById = await this.database.query(`
        SELECT *
        from "user"
        where "user".id = ${userId};
        `);

    const newTask = await this.database.query(`
        insert into task (to_do_list_id, name, is_done) 
        VALUES ('${userById.rows[0].to_do_list_id}', '${taskName}', '${isDone}');
        `);
    return newTask;
  }

  async findTask(userId, taskId) {
    return this.database.query(`
        SELECT *
        from task
        inner join "user" u on u.to_do_list_id = task.to_do_list_id
        where u.id=${userId} and task.id = ${taskId};
        `);
  }

  async makeTaskCompleted(userId, taskId) {
    const changeTask = await this.database.query(`
        update task
        set is_done = true
        from to_do_list
        join "user" u on to_do_list.id = u.to_do_list_id
        where u.id = ${userId} and task.id = ${taskId};
        `);
    return changeTask.rowCount;
  }

  async getList(userId) {
    const getAllTasks = await this.database.query(`
        SELECT *
        from task
        inner join "user" u on u.to_do_list_id = task.to_do_list_id
        where u.id = ${userId};`);

      return getAllTasks.rows;
  }
}
module.exports = { TaskRepository };
