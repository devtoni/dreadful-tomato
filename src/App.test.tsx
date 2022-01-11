import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should display a text content', () => {
    render(<App />);

    const title = screen.getByText(/hello world/i);

    expect(title).toBeInTheDocument();
  });
});
