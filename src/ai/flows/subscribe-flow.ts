
'use server';

/**
 * @fileOverview A simple flow for handling newsletter subscriptions.
 *
 * - subscribeToNewsletter - A function that saves a new subscriber's email to Firestore.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";

const SubscribeInputSchema = z.string().email({ message: "Invalid email address" });

export async function subscribeToNewsletter(email: string): Promise<string> {
  const validatedEmail = SubscribeInputSchema.parse(email);
  return subscribeFlow(validatedEmail);
}

const subscribeFlow = ai.defineFlow(
  {
    name: 'subscribeFlow',
    inputSchema: SubscribeInputSchema,
    outputSchema: z.string(),
  },
  async (email) => {
    try {
      // Check if the email already exists
      const subscribersRef = collection(db, "subscribers");
      const q = query(subscribersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log(`Email already subscribed: ${email}`);
        return `The email ${email} is already subscribed to our newsletter!`;
      }

      // Add a new document with a generated id.
      await addDoc(collection(db, "subscribers"), {
        email: email,
        subscribedAt: serverTimestamp()
      });
      console.log(`New subscription from: ${email}`);
      return `Thank you for subscribing, ${email}! You're all set.`;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw new Error("Could not subscribe. Please try again later.");
    }
  }
);
