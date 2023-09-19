import { render, screen } from "@testing-library/react";

interface MyComponentProps {
  a: number;
}

function MyComponent({ a }: MyComponentProps) {
  return <div>MyComponent: {a}</div>;
}

it("should work", () => {
  render(<MyComponent a={5} />);
  const component = screen.getByText("MyComponent: 5");
  expect(component).toBeVisible();
});
