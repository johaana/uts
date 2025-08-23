
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
import { allEvents } from '@/lib/festival-data';
import { format, parse } from 'date-fns';

const getFestivalDates = ai.defineTool(
  {
    name: 'getFestivalDates',
    description:
      "Get the date of a specific festival in a given year. Use this tool *only* if the user explicitly asks for the date of a festival, for example 'When is Holi in 2026?'. Do not use it for general planning.",
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
       const eventYear = parseInt(event.date.split(', ')[1].split(' - ')[0], 10);
      return (
        event.name.toLowerCase().includes(searchTerm) && eventYear === year
      );
    });

    if (results.length > 0) {
      return `I found it! In ${year}, ${results[0].name} is on ${results[0].date}.`;
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
  prompt: `You are the friendly and expert Utsavs.com AI Guide. Your primary goal is to help users plan holidays and learn about the rich traditions of festivals from around the world.

Your knowledge is based on the extensive guides available on Utsavs.com. When a user asks a question, you should first try to answer it using the information from the website's festival pages, recipes, and blog posts.
If the user asks for the date of a specific festival (e.g., "When is Diwali in 2025?"), you MUST use the provided getFestivalDates tool to find the information. For general planning questions (e.g., "Plan a trip for Diwali"), do NOT use the tool and instead provide creative suggestions.

If the information is not available on the site, you may use your broader general knowledge to provide a helpful and informative response. Always maintain a concise, friendly, and engaging tone.
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
