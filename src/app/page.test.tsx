import { render, screen } from "@testing-library/react";
import Home from "./page";

it("contains the text `Home`", () => {
  render(<Home />);
  screen.getByText("Home");
});
