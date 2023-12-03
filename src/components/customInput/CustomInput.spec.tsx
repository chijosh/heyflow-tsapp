import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CustomInput from './CustomInput';

describe('Input component', () => {
  it('renders input field and handles change correctly', () => {
    const placeholderText = 'Enter text';
    const resValue = 'Result';

    render(
      <CustomInput placeholder={placeholderText} resValue={resValue} />
    );

    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();

    const inputValue = 'Test Input';
    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(inputElement).toHaveValue(inputValue);

    const resultElement = screen.getByText(resValue);
    expect(resultElement).toBeInTheDocument();
  });
});
