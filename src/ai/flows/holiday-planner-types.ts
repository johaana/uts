/**
 * @fileOverview Types for the AI holiday planner.
 *
 * - HolidayPlannerInput - The input type for the planHoliday function.
 * - HolidayPlannerOutput - The return type for the planHoliday function.
 */

import {z} from 'zod';

export const HolidayPlannerInputSchema = z.object({
  prompt: z.string().describe("The user's request for holiday planning."),
});
export type HolidayPlannerInput = z.infer<typeof HolidayPlannerInputSchema>;

export const HolidayPlannerOutputSchema = z.object({
  response: z
    .string()
    .describe("The AI's response, providing holiday suggestions."),
});
export type HolidayPlannerOutput = z.infer<typeof HolidayPlannerOutputSchema>;
