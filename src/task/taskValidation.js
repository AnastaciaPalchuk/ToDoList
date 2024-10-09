const { z } =  require("zod");

const CreateTask = z.object ({
    taskName: z.string(),
    userId: z.number().int().nonnegative(),
    isDone: z.boolean()
});

const MakeCompleted = z.object({
    taskId: z.number().int().nonnegative(),
    userId: z.number().int().nonnegative(),
});

const GetToDoList = z.object({
    userId: z.number().int().nonnegative(),
});

module.exports = {CreateTask, MakeCompleted, GetToDoList};