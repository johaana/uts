
'use server';
/**
 * @fileOverview An AI-powered holiday planner.
 *
 * - planHoliday - A function that handles the holiday planning process.
 */

import {ai} from '@/ai/genkit';
import {
  HolidayPlannerInput,
  HolidayPlannerInputSchema,
  HolidayPlannerOutput,
  HolidayPlannerOutputSchema,
} from './holiday-planner-types';

export async function planHoliday(
  input: HolidayPlannerInput
): Promise<HolidayPlannerOutput> {
  return planHolidayFlow(input);
}

const prompt = ai.definePrompt({
  name: 'holidayPlannerPrompt',
  input: {schema: HolidayPlannerInputSchema},
  output: {schema: HolidayPlannerOutputSchema},
  prompt: `You are a friendly and expert Indian holiday planner for Utsavs.com.
Your goal is to help users plan holidays around India's vibrant festivals.
Respond to the user's prompt with helpful suggestions.
Keep your response concise, friendly, and informative.
Base your suggestions on the general knowledge of Indian festivals, seasons, and regions.
Prompt: {{{prompt}}}
`,
});

const planHolidayFlow = ai.defineFlow(
  {
    name: 'planHolidayFlow',
    inputSchema: HolidayPlannerInputSchema,
    outputSchema: HolidayPlannerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
