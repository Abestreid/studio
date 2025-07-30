'use server';

import {
  naturalLanguageTenderSearch,
  type NaturalLanguageTenderSearchInput,
} from '@/ai/flows/tender-search';
import { z } from 'zod';

const SearchSchema = z.object({
  query: z.string().min(3, 'Запрос должен содержать не менее 3 символов'),
  industry: z.string().optional(),
  region: z.string().optional(),
});

export interface SearchState {
  results?: string[];
  error?: string;
  message?: string;
}

export async function searchTenders(
  prevState: SearchState,
  formData: FormData
): Promise<SearchState> {
  const validatedFields = SearchSchema.safeParse({
    query: formData.get('query'),
    industry: formData.get('industry'),
    region: formData.get('region'),
  });

  if (!validatedFields.success) {
    return {
      error:
        validatedFields.error.flatten().fieldErrors.query?.[0] || 'Неверный ввод.',
    };
  }
  
  const searchInput: NaturalLanguageTenderSearchInput = {
    query: validatedFields.data.query,
    ...(validatedFields.data.industry &&
    validatedFields.data.industry !== 'Все отрасли'
      ? { industry: validatedFields.data.industry }
      : {}),
    ...(validatedFields.data.region &&
    validatedFields.data.region !== 'Все регионы'
      ? { region: validatedFields.data.region }
      : {}),
  };

  try {
    const { results } = await naturalLanguageTenderSearch(searchInput);
    if (!results || results.length === 0) {
      return { message: 'Тендеры не найдены. Попробуйте другой запрос.' };
    }
    return { results };
  } catch (e) {
    console.error(e);
    return {
      error: 'Произошла ошибка при поиске. Пожалуйста, попробуйте еще раз.',
    };
  }
}
