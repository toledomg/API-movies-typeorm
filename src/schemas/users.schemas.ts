import { z } from 'zod';

// export const userSchema = z.object({
//   id: z.number(),
//   name: z.string(),
//   email: z.string().email(),
//   password: z.string().min(4),
//   admin: z.boolean().optional().default(false),
//   active: z.boolean().optional().default(true),
// });

// export const requestUserSchema = userSchema.omit({ id: true });

// export const responseUserSchema = userSchema.omit({
//   password: true,
// });

// export const responseOnlyEmail = userSchema.pick({ email: true });

// export const requestAllUsersSchema = z.array(responseUserSchema);

// export const updateUserSchema = requestUserSchema.partial();
