import { render } from '@testing-library/react';
import Container from './Container';

describe('Container component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <div>Hello, this is a child component</div>
      </Container>
    );

    const childElement = getByText('Hello, this is a child component');
    expect(childElement).toBeInTheDocument();
  });
});