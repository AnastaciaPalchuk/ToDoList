const { z } =  require("zod");

const FindUserById = z.object({
    userId: z.number().int().nonnegative(),
})

module.exports = {FindUserById};