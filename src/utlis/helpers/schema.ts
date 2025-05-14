import { z } from 'zod';

export const userSchema = z.object({
  name: z
    .string()
    .min(3, 'Name should be at least 3 characters')
    .regex(/^[A-Za-z ]+$/, 'Name should only contain letters and spaces'),
  email: z.string().email('Invalid email format'),
});

export type UserFormData = z.infer<typeof userSchema>;
