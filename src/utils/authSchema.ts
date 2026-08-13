// utils/authSchema.ts
import { z } from 'zod';

/**
 * 1. Login Form Validation Schema
 */
export const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'User name is required' })
    .min(3, { message: 'User name must be at least 3 characters long' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters long' }),
});

/**
 * 2. Register Form Validation Schema
 */
export const registerSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email Address is required' })
    .email({ message: 'Please enter a valid email address' }),
  username: z
    .string()
    .min(1, { message: 'User name is required' })
    .min(3, { message: 'User name must be at least 3 characters long' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters long' }),
});

// Create TypeScript type definitions directly from the Zod schemas
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
