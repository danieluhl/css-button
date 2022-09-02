import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

test("displays button that can be clicked", async () => {
  const clickHandler = () => console.log("here");
  render(<Button handleClick={clickHandler} />);
  expect(screen.getByText("Click Me!")).toBeInTheDocument();
});
