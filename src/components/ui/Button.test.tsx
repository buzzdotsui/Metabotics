import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button, LinkButton } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('_primary');
  });

  it('applies size classes', () => {
    render(<Button size="large">Large</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('_large');
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button.className).toContain('_disabled');
  });

  it('calls onClick handler', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});

describe('LinkButton', () => {
  it('renders as anchor with href', () => {
    render(<LinkButton href="/test">Link</LinkButton>);
    const link = screen.getByRole('link', { name: /link/i });
    expect(link).toHaveAttribute('href', '/test');
  });

  it('applies variant classes', () => {
    render(<LinkButton href="/test" variant="secondary">Link</LinkButton>);
    const link = screen.getByRole('link');
    expect(link.className).toContain('_secondary');
  });
});