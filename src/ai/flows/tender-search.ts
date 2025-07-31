
'use server';

/**
 * @fileOverview Implements a Genkit flow for searching tenders using natural language.
 *
 * - naturalLanguageTenderSearch - A function that performs the tender search.
 * - NaturalLanguageTenderSearchInput - The input type for the naturalLanguageTenderSearch function.
 * - NaturalLanguageTenderSearchOutput - The return type for the naturalLanguageTenderSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TenderSchema = z.object({
  id: z.string().describe('Уникальный идентификатор тендера'),
  title: z.string().describe('Название тендера'),
  location: z.string().describe('Местоположение'),
  customer: z.string().describe('Заказчик'),
  platform: z.string().describe('Платформа'),
  published: z.string().describe('Дата публикации'),
  deadline: z.string().describe('Срок подачи заявок'),
  type: z.string().describe('Тип (Товар, Услуга, Работа)'),
  price: z.string().describe('Цена'),
  status: z.string().optional().describe('Статус тендера'),
});

const NaturalLanguageTenderSearchInputSchema = z.object({
  query: z.string().describe('The natural language search query.'),
  industry: z.string().optional().describe('The industry to search within.'),
  region: z.string().optional().describe('The region to search within.'),
});
export type NaturalLanguageTenderSearchInput = z.infer<typeof NaturalLanguageTenderSearchInputSchema>;

const NaturalLanguageTenderSearchOutputSchema = z.object({
  results: z.array(TenderSchema).describe('A list of relevant tender opportunities.'),
});
export type NaturalLanguageTenderSearchOutput = z.infer<typeof NaturalLanguageTenderSearchOutputSchema>;

export async function naturalLanguageTenderSearch(input: NaturalLanguageTenderSearchInput): Promise<NaturalLanguageTenderSearchOutput> {
  return naturalLanguageTenderSearchFlow(input);
}

const naturalLanguageTenderSearchPrompt = ai.definePrompt({
  name: 'naturalLanguageTenderSearchPrompt',
  input: {schema: NaturalLanguageTenderSearchInputSchema},
  output: {schema: NaturalLanguageTenderSearchOutputSchema},
  prompt: `You are an expert in tender opportunity search. Your task is to act as a mock API.

You will take a natural language query from the user and return a list of relevant tender opportunities.
The user's query is "{{query}}".

If the query contains the word "принтер" or "принтеры", you MUST return the following 1 result. For any other query, you must return an empty list of results.

Result 1:
- id: "auc0002573978"
- title: "Многофункциональные устройства (МФУ) и принтеры"
- location: "Минск"
- customer: "Национальный филиал (представительство) Межгосударственной телерадиокомпании 'Мир' в Республике Беларусь"
- platform: "goszakupki.by"
- published: "04.06.2025"
- deadline: "08.06.2025"
- type: "Товар"
- price: "24 259.34 BYN"
- status: "Открыт"

Format the output as a valid JSON object matching the output schema. Do not include any other text or explanations.`,
});

const naturalLanguageTenderSearchFlow = ai.defineFlow(
  {
    name: 'naturalLanguageTenderSearchFlow',
    inputSchema: NaturalLanguageTenderSearchInputSchema,
    outputSchema: NaturalLanguageTenderSearchOutputSchema,
  },
  async input => {
    const {output} = await naturalLanguageTenderSearchPrompt(input);
    return output!;
  }
);
