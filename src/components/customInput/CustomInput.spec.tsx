import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomInput from './CustomInput';

describe('Input component', () => {
  it('renders input field and handles change correctly', () => {
    const placeholderText = 'Enter text';
    const resValue = 'Result';

    const { getByPlaceholderText, getByText } = render(
      <CustomInput placeholder={placeholderText} resValue={resValue} />
    );

    const inputElement = getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();

    const inputValue = 'Test Input';
    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(inputElement).toHaveValue(inputValue);

    const resultElement = getByText(resValue);
    expect(resultElement).toBeInTheDocument();
  });
});
