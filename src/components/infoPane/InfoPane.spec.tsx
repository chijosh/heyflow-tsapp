import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoPane from './InfoPane';

describe('InfoPane component', () => {
  it('renders InfoPane component correctly', () => {
    render(<InfoPane />);

    const propertyHeader = screen.getByText('Property');
    const blockVariableHeader = screen.getByText('Block / Variable');
    expect(propertyHeader).toBeInTheDocument();
    expect(blockVariableHeader).toBeInTheDocument();

    const propertyInput = screen.getByPlaceholderText('Property');
    const blockVariableInput = screen.getByPlaceholderText('Variable');
    expect(propertyInput).toBeInTheDocument();
    expect(blockVariableInput).toBeInTheDocument();

  });
});
