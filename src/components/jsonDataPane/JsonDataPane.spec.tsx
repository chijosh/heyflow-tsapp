import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { JsonDataPane, Props } from './JsonDataPane';

describe('JsonDataPane component', () => {
  const mockJsonData: Props['jsonData'] = {
    key1: 'value1',
    key2: {
      nestedKey: 'nestedValue',
      nestedArray: [1, 2, 3],
    },
  };

  const mockGetJsonData = jest.fn();

  const setup = (props: Partial<Props> = {}) => {
    const defaultProps: Props = {
      jsonData: mockJsonData,
      getJsonData: mockGetJsonData,
    };
    return render(<JsonDataPane {...defaultProps} {...props} />);
  };

  it('renders JsonDataPane component correctly', () => {
    const { getByText } = setup();

    const stringValueElement = getByText(`'value1'`);
    expect(stringValueElement).toBeInTheDocument();
  });

  it('handles click event on keys', () => {
    const { getByText } = setup();

    const keyElement = getByText('key1');
    fireEvent.click(keyElement);

    expect(mockGetJsonData).toHaveBeenCalledWith({
      parentKey: null,
      nestedKey: 'key1',
      parentValue: null,
      nestedValue: 'value1',
      position: null,
    });
  });
});
