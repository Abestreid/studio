'use server';
/**
 * @fileOverview Summarizes the details of a tender.
 *
 * - summarizeTender - A function that summarizes tender details.
 * - SummarizeTenderInput - The input type for the summarizeTender function.
 * - SummarizeTenderOutput - The return type for the summarizeTender function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTenderInputSchema = z.object({
  tenderDetails: z
    .string()
    .describe('The details of the tender to be summarized.'),
});
export type SummarizeTenderInput = z.infer<typeof SummarizeTenderInputSchema>;

const SummarizeTenderOutputSchema = z.object({
  summary: z.string().describe('A summary of the tender details.'),
});
export type SummarizeTenderOutput = z.infer<typeof SummarizeTenderOutputSchema>;

export async function summarizeTender(input: SummarizeTenderInput): Promise<SummarizeTenderOutput> {
  return summarizeTenderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTenderPrompt',
  input: {schema: SummarizeTenderInputSchema},
  output: {schema: SummarizeTenderOutputSchema},
  prompt: `Summarize the following tender details:\n\n{{tenderDetails}}`,
});

const summarizeTenderFlow = ai.defineFlow(
  {
    name: 'summarizeTenderFlow',
    inputSchema: SummarizeTenderInputSchema,
    outputSchema: SummarizeTenderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
