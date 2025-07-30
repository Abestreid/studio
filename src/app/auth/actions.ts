
'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const LoginSchema = z.object({
  username: z.string().min(1, 'Имя пользователя не может быть пустым'),
  password: z.string().min(1, 'Пароль не может быть пустым'),
});

const RegisterSchema = z.object({
    name: z.string().min(1, 'Имя не может быть пустым'),
    email: z.string().email('Неверный формат email'),
    password: z.string().min(4, 'Пароль должен содержать минимум 4 символа'),
});


export interface AuthState {
  error?: string;
  message?: string;
}

export async function login(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const validatedFields = LoginSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: 'Неверные данные. Проверьте правильность ввода.',
    };
  }
  
  const { username, password } = validatedFields.data;

  // Mock authentication logic
  if (username === 'user01' && password === 'demo') {
    // In a real app, you would set a cookie or session here
    return { message: 'Вы успешно вошли в систему.' };
  } else {
    return {
      error: 'Неверное имя пользователя или пароль.',
    };
  }
}


export async function register(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const validatedFields = RegisterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    const firstError = validatedFields.error.flatten().fieldErrors;
    const errorMessage = Object.values(firstError).flat()[0] || 'Пожалуйста, исправьте ошибки в форме.';
    return {
      error: errorMessage,
    };
  }

  // Mock registration logic
  console.log('New user registration:', validatedFields.data);

  // In a real app, you would create a user in the database here
  
  return { message: 'Регистрация прошла успешно! Теперь вы можете войти.' };
}
