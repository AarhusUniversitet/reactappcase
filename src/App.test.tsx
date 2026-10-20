import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('shows products when requested', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Hent alle produkter' }));

    expect(screen.getByText('Produkt 1')).toBeInTheDocument();
    expect(screen.getByText('Produkt 2')).toBeInTheDocument();
    expect(screen.getByText('Produkt 3')).toBeInTheDocument();
  });
});