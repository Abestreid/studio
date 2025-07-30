'use server';

import {
  naturalLanguageTenderSearch,
  type NaturalLanguageTenderSearchInput,
} from '@/ai/flows/tender-search';
import { z } from 'zod';

const SearchSchema = z.object({
  query: z.string().min(1, 'Запрос не может быть пустым'),
  industry: z.string().optional(),
  region: z.string().optional(),
});

export interface TenderResult {
    id: string;
    title: string;
    location: string;
    customer: string;
    platform: string;
    published: string;
    deadline: string;
    type: string;
    price: string;
    status?: string;
}

export interface SearchState {
  results?: TenderResult[];
  error?: string;
  message?: string;
}

export async function searchTenders(
  prevState: SearchState,
  formData: FormData
): Promise<SearchState> {
  const validatedFields = SearchSchema.safeParse({
    query: formData.get('query'),
    industry: formData.get('industry') || undefined,
    region: formData.get('region') || undefined,
  });
  
  if (!validatedFields.success) {
    const queryError = validatedFields.error.flatten().fieldErrors.query?.[0];
    const generalError = 'Неверный ввод.';
    return {
      error: queryError || generalError,
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
