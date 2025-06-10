import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  test('submitting with empty fields shows validation error', async () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    await userEvent.click(submitButton);
    expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
  });

  test('successful submit clears form and displays success message', async () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/your email/i);
    const messageInput = screen.getByLabelText(/your message/i);

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(messageInput, 'Hello!');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await userEvent.click(submitButton);

    expect(
      screen.getByText(/thank you! your message has been received/i)
    ).toBeInTheDocument();
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
});
