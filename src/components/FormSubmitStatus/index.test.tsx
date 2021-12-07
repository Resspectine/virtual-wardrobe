import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FormSubmitStatus from '.';

describe('FormSubmitSection', () => {
  test('should be success', () => {
    render(<FormSubmitStatus status="success" />);

    expect(screen.getByText(/Success!/i).parentElement).toHaveClass('makeStyles-success-4');
  });

  test('should be error', () => {
    render(<FormSubmitStatus status="error" />);

    expect(screen.getByText(/error/i).parentElement).toHaveClass('makeStyles-error-7');
  });

  test('should be loading', () => {
    render(<FormSubmitStatus status="loading" />);

    expect(screen.getByText(/sending/i).parentElement).toHaveClass('makeStyles-loading-13');
  });

  test('should be null', () => {
    const { container } = render(<FormSubmitStatus status="idle" />);

    expect(container.firstChild).toBe(null);
  });
});
