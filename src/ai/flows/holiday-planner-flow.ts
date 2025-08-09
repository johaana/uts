
'use server';
/**
 * @fileOverview An AI-powered holiday planner.
 *
 * - planHoliday - A function that handles the holiday planning process.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {
  HolidayPlannerInput,
  HolidayPlannerInputSchema,
  HolidayPlannerOutput,
  HolidayPlannerOutputSchema,
} from './holiday-planner-types';
import {allEvents} from '@/lib/festival-data';
import {format, parse} from 'date-fns';

const getFestivalDates = ai.defineTool(
  {
    name: 'getFestivalDates',
    description:
      'Get the date of a specific festival in a given year. Use this tool if the user asks for a specific festival date.',
    inputSchema: z.object({
      festivalName: z.string().describe('The name of the festival to look up'),
      year: z.number().describe('The year to look for the festival in'),
    }),
    outputSchema: z
      .string()
      .describe(
        'The date of the festival in the given year, or a message if not found.'
      ),
  },
  async ({festivalName, year}) => {
    const searchTerm = festivalName.toLowerCase();
    const results = allEvents.filter(event => {
      const eventYear = parseInt(event.date.split(', ')[1], 10);
      return (
        event.name.toLowerCase().includes(searchTerm) && eventYear === year
      );
    });

    if (results.length > 0) {
      return `I found it! ${results[0].name} will be on ${results[0].date}.`;
    } else {
      return `I couldn't find a date for ${festivalName} in ${year} in my data. You might want to double-check the spelling or year.`;
    }
  }
);

export async function planHoliday(
  input: HolidayPlannerInput
): Promise<HolidayPlannerOutput> {
  return planHolidayFlow(input);
}

const prompt = ai.definePrompt({
  name: 'holidayPlannerPrompt',
  input: {schema: HolidayPlannerInputSchema},
  output: {schema: HolidayPlannerOutputSchema},
  tools: [getFestivalDates],
  prompt: `You are a friendly and expert Indian holiday planner for Utsavs.com.
Your goal is to help users plan holidays around India's vibrant festivals.
If the user asks for the date of a specific festival, you MUST use the provided getFestivalDates tool to find the information.
If the user asks a general question, respond with helpful suggestions.
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
