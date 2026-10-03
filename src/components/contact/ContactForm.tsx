'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import styles from './ContactForm.module.css';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  interest: z.string().min(1, 'Please select an interest area'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

const interestOptions = [
  { value: 'industrial-partnership', label: 'INDUSTRIAL PARTNERSHIP' },
  { value: 'technology', label: 'TECHNOLOGY' },
  { value: 'research', label: 'RESEARCH' },
  { value: 'investment', label: 'INVESTMENT' },
  { value: 'other', label: 'OTHER' },
] as const;

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => Promise<void>;
  initialValues?: Partial<ContactFormValues>;
}

export function ContactForm({ onSubmit, initialValues }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      interest: '',
      message: '',
      ...initialValues,
    },
    mode: 'onBlur',
  });

  const handleFormSubmit = async (values: ContactFormValues) => {
    setSubmitStatus('submitting');
    setErrorMessage(null);

    try {
      await onSubmit(values);
      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <div className={styles.successIcon} aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="24" cy="24" r="22" />
            <path d="M16 24l6 6 12-12" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>MESSAGE RECEIVED</h3>
        <p className={styles.successDescription}>Your inquiry has been submitted successfully.</p>
        <p className={styles.successReference}>METABOTICS / CONTACT / 01</p>
        <p className={styles.successNote}>We will review your message and respond within 2 business days.</p>
        <Button variant="secondary" onClick={() => setSubmitStatus('idle')} className={styles.resetBtn}>
          SUBMIT ANOTHER INQUIRY
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form} noValidate>
      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            <span>NAME</span>
            <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            {...register('name')}
            id="name"
            type="text"
            autoComplete="name"
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p id="name-error" className={styles.errorMessage} role="alert">
              ERROR / {errors.name.message}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="company" className={styles.label}>
            <span>COMPANY</span>
          </label>
          <input
            {...register('company')}
            id="company"
            type="text"
            autoComplete="organization"
            className={`${styles.input} ${errors.company ? styles.error : ''}`}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            <span>EMAIL</span>
            <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            autoComplete="email"
            className={`${styles.input} ${errors.email ? styles.error : ''}`}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p id="email-error" className={styles.errorMessage} role="alert">
              ERROR / {errors.email.message}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="interest" className={styles.label}>
            <span>INTEREST</span>
            <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <select
            {...register('interest')}
            id="interest"
            className={`${styles.select} ${errors.interest ? styles.error : ''}`}
            aria-invalid={errors.interest ? 'true' : 'false'}
            aria-describedby={errors.interest ? 'interest-error' : undefined}
            disabled={isSubmitting}
          >
            <option value="">SELECT INTEREST AREA</option>
            {interestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {errors.interest && (
            <p id="interest-error" className={styles.errorMessage} role="alert">
              ERROR / {errors.interest.message}
            </p>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>
          <span>MESSAGE</span>
          <span className={styles.required} aria-hidden="true">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          disabled={isSubmitting}
          placeholder="Describe your inquiry, project requirements, or collaboration idea..."
        />
        {errors.message && (
          <p id="message-error" className={styles.errorMessage} role="alert">
            ERROR / {errors.message.message}
          </p>
        )}
      </div>

      {errorMessage && (
        <div className={styles.formError} role="alert">
          <span>ERROR / </span>
          <span>{errorMessage}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="large"
        disabled={isSubmitting}
        className={styles.submitBtn}
      >
        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE →'}
      </Button>
    </form>
  );
}