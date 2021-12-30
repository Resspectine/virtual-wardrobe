import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TagItem from '.';

describe('TagItem', () => {
  test('should display tag title', () => {
    render(
      <TagItem
        tag={{
          id: 'id',
          title: 'Title',
        }}
      />
    );

    expect(screen.getByText(/Title/i).parentElement).toHaveClass('css-1g9c5ku');
  });

  test('should display delete button', () => {
    render(
      <TagItem
        tag={{
          id: 'id',
          title: 'Title',
        }}
        onDelete={() => () => {}}
      />
    );

    expect(screen.getByTestId('CancelIcon')).toHaveClass('MuiSvgIcon-root');
  });
});
