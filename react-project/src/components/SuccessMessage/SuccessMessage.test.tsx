import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { SuccessMessage } from './SuccessMessage';

describe('SuccessMessage', () => {
  it('render SuccessMessage', () => {
    render(<SuccessMessage />);
    expect(screen.getByText('Data sent successfully')).toBeInTheDocument();
  });
});
