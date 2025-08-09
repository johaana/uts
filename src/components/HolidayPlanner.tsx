
'use client';

import {useState} from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Loader, Bot, User, Send} from 'lucide-react';
import {planHoliday} from '@/ai/flows/holiday-planner-flow';
import {
  HolidayPlannerInputSchema,
  HolidayPlannerInput,
} from '@/ai/flows/holiday-planner-types';

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export function HolidayPlanner() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<HolidayPlannerInput>({
    resolver: zodResolver(HolidayPlannerInputSchema),
  });

  const onSubmit: SubmitHandler<HolidayPlannerInput> = async data => {
    setIsSubmitting(true);
    const userMessage: Message = {role: 'user', text: data.prompt};
    setMessages(prev => [...prev, userMessage]);
    reset();

    try {
      const result = await planHoliday(data);
      const botMessage: Message = {role: 'bot', text: result.response};
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'bot',
        text: 'Sorry, I had trouble planning that. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot />
          AI Holiday Planner
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 h-64 overflow-y-auto p-4 border rounded-md bg-muted/50">
          {messages.length === 0 ? (
             <div className="flex items-center justify-center h-full text-muted-foreground text-center">
                <p>e.g., 'When is Holi in 2028?' or 'Plan a trip around Durga Puja'</p>
             </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'bot' && <Bot className="shrink-0" />}
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary'
                  }`}
                >
                  {msg.text}
                </div>
                 {msg.role === 'user' && <User className="shrink-0" />}
              </div>
            ))
          )}
          {isSubmitting && (
            <div className="flex justify-start gap-2">
                <Bot className="shrink-0" />
                 <div className="bg-secondary p-3 rounded-lg">
                    <Loader className="animate-spin" />
                 </div>
            </div>
            )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex gap-2">
          <Input
            {...register('prompt')}
            placeholder="Ask a question..."
            disabled={isSubmitting}
          />
          <Button type="submit" disabled={isSubmitting}>
             <Send className="w-4 h-4"/>
          </Button>
        </form>
        {errors.prompt && (
          <p className="text-red-500 text-sm mt-1">{errors.prompt.message}</p>
        )}
      </CardContent>
    </Card>
  );
}
