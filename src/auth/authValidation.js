const { z } =  require("zod");

const passwordSchema = z
  .string()
  .min(8, "Пароль має бути не менше 8 символів")
  .max(20, "Пароль має бути не більше 20 символів");

const UserSignUp = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  password: passwordSchema,
});

const UserSignIn = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

module.exports = { UserSignIn, UserSignUp }