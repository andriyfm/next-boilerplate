import Button from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should be passed", () => {
    render(<Button text="just a text" />);

    const el = screen.getByText("just a text");
    const handleClick = jest.fn();

    fireEvent.click(el, handleClick());

    expect(el).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
