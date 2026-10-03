import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  interest: z.string().min(1, 'Please select an interest area'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const emailSchema = z.string().email('Invalid email address');

export const urlSchema = z.string().url('Invalid URL');

export function sanitizeHtml(input: string): string {
  return input
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#039;');
}

export function validateOrigin(origin: string | null, allowedOrigins: string[]): boolean {
  if (!origin) return false;
  try {
    const url = new URL(origin);
    return allowedOrigins.some(allowed => {
      const allowedUrl = new URL(allowed);
      return url.hostname === allowedUrl.hostname;
    });
  } catch {
    return false;
  }
}