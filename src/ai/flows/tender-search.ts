// This file uses server-side code.
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

const NaturalLanguageTenderSearchInputSchema = z.object({
  query: z.string().describe('The natural language search query.'),
  industry: z.string().optional().describe('The industry to search within.'),
  region: z.string().optional().describe('The region to search within.'),
});
export type NaturalLanguageTenderSearchInput = z.infer<typeof NaturalLanguageTenderSearchInputSchema>;

const NaturalLanguageTenderSearchOutputSchema = z.object({
  results: z.array(z.string()).describe('A list of relevant tender opportunities.'),
});
export type NaturalLanguageTenderSearchOutput = z.infer<typeof NaturalLanguageTenderSearchOutputSchema>;

export async function naturalLanguageTenderSearch(input: NaturalLanguageTenderSearchInput): Promise<NaturalLanguageTenderSearchOutput> {
  return naturalLanguageTenderSearchFlow(input);
}

const naturalLanguageTenderSearchPrompt = ai.definePrompt({
  name: 'naturalLanguageTenderSearchPrompt',
  input: {schema: NaturalLanguageTenderSearchInputSchema},
  output: {schema: NaturalLanguageTenderSearchOutputSchema},
  prompt: `You are an expert in tender opportunity search.

You will take a natural language query from the user and return a list of relevant tender opportunities.
Consider the industry and region if provided.

Query: {{{query}}}
Industry: {{{industry}}}
Region: {{{region}}}

Results:`, // Removed Handlebars 'each' helper as it is for presentation, not generation
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
