import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Contact } from '../sections/Contact';

describe('Contact Section & Form Validation', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders all required form inputs and honeypot field', () => {
    render(<Contact />);

    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message \/ project scope/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/leave this field blank/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /transmit message/i })).toBeInTheDocument();
  });

  it('validates minimum name length (< 2 characters)', async () => {
    render(<Contact />);

    const submitBtn = screen.getByRole('button', { name: /transmit message/i });
    fireEvent.click(submitBtn);

    expect(
      await screen.findByText(/please provide your name \(minimum 2 characters\)/i)
    ).toBeInTheDocument();
  });

  it('validates email format', async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const submitBtn = screen.getByRole('button', { name: /transmit message/i });

    fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } });
    fireEvent.click(submitBtn);

    expect(
      await screen.findByText(/please enter a valid work or personal email address/i)
    ).toBeInTheDocument();
  });

  it('validates message length (< 10 characters)', async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/message \/ project scope/i);
    const submitBtn = screen.getByRole('button', { name: /transmit message/i });

    fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
    fireEvent.change(emailInput, { target: { value: 'alex@company.com' } });
    fireEvent.change(messageInput, { target: { value: 'Short' } });
    fireEvent.click(submitBtn);

    expect(
      await screen.findByText(/please provide a brief project summary \(minimum 10 characters\)/i)
    ).toBeInTheDocument();
  });

  it('silently ignores submission if honeypot field is filled', () => {
    render(<Contact />);

    const honeypot = screen.getByLabelText(/leave this field blank/i);
    const submitBtn = screen.getByRole('button', { name: /transmit message/i });

    fireEvent.change(honeypot, { target: { value: 'spam-bot-input' } });
    fireEvent.click(submitBtn);

    // Expect spoofed success status without sending
    expect(screen.getByText(/message dispatched successfully/i)).toBeInTheDocument();
  });

  it('renders copy email button with clipboard trigger', () => {
    render(<Contact />);
    const copyBtn = screen.getByRole('button', { name: /copy direct email address/i });
    expect(copyBtn).toBeInTheDocument();
  });

  it('handles successful API submission (200 OK) and clears form', async () => {
    vi.stubEnv('VITE_CONTACT_ENDPOINT', 'https://api.example.com/contact');

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as any);

    render(<Contact />);

    const nameInput = screen.getByLabelText(/your name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/your email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/message \/ project scope/i) as HTMLTextAreaElement;
    const submitBtn = screen.getByRole('button', { name: /transmit message/i });

    fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
    fireEvent.change(emailInput, { target: { value: 'alex@company.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Inquiry regarding staff mobile architect advisory role.' },
    });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/message dispatched successfully/i)).toBeInTheDocument();
    });

    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');

    vi.unstubAllEnvs();
  });

  it('handles server error (500), keeps user inputs, and re-enables form', async () => {
    vi.stubEnv('VITE_CONTACT_ENDPOINT', 'https://api.example.com/contact');

    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({ error: 'Internal gateway timeout.' }),
    } as any);

    render(<Contact />);

    const nameInput = screen.getByLabelText(/your name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/your email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/message \/ project scope/i) as HTMLTextAreaElement;
    const submitBtn = screen.getByRole('button', { name: /transmit message/i });

    fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
    fireEvent.change(emailInput, { target: { value: 'alex@company.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Inquiry regarding staff mobile architect advisory role.' },
    });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/transmission failure/i)).toBeInTheDocument();
    });

    expect(nameInput.value).toBe('Alex Morgan');
    expect(emailInput.value).toBe('alex@company.com');
    expect(messageInput.value).toBe('Inquiry regarding staff mobile architect advisory role.');
    expect(submitBtn).not.toBeDisabled();

    vi.unstubAllEnvs();
  });

  it('handles network failure (fetch reject), keeps user inputs, and re-enables form', async () => {
    vi.stubEnv('VITE_CONTACT_ENDPOINT', 'https://api.example.com/contact');

    global.fetch = vi.fn().mockRejectedValue(new Error('Network offline'));

    render(<Contact />);

    const nameInput = screen.getByLabelText(/your name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/your email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/message \/ project scope/i) as HTMLTextAreaElement;
    const submitBtn = screen.getByRole('button', { name: /transmit message/i });

    fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
    fireEvent.change(emailInput, { target: { value: 'alex@company.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Inquiry regarding staff mobile architect advisory role.' },
    });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/transmission failure/i)).toBeInTheDocument();
      expect(screen.getByText(/network error encountered/i)).toBeInTheDocument();
    });

    expect(nameInput.value).toBe('Alex Morgan');
    expect(emailInput.value).toBe('alex@company.com');
    expect(messageInput.value).toBe('Inquiry regarding staff mobile architect advisory role.');
    expect(submitBtn).not.toBeDisabled();

    vi.unstubAllEnvs();
  });

  it('falls back to mailto: when VITE_CONTACT_ENDPOINT is unset', async () => {
    vi.stubEnv('VITE_CONTACT_ENDPOINT', '');

    const originalLocation = window.location;
    const locationMock = { ...originalLocation, href: '' };
    Object.defineProperty(window, 'location', {
      writable: true,
      value: locationMock,
    });

    render(<Contact />);

    const nameInput = screen.getByLabelText(/your name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/your email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(/message \/ project scope/i) as HTMLTextAreaElement;
    const submitBtn = screen.getByRole('button', { name: /transmit message/i });

    fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
    fireEvent.change(emailInput, { target: { value: 'alex@company.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Inquiry regarding staff mobile architect advisory role.' },
    });
    fireEvent.click(submitBtn);

    // Form stays enabled and preserves input
    expect(submitBtn).not.toBeDisabled();
    expect(nameInput.value).toBe('Alex Morgan');
    expect(locationMock.href).toContain('mailto:');

    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    });
    vi.unstubAllEnvs();
  });
});
