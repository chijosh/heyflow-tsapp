import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container component', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <div>Hello, this is a child component</div>
      </Container>
    );

    const childElement = screen.getByText('Hello, this is a child component');
    expect(childElement).toBeInTheDocument();
  });
});