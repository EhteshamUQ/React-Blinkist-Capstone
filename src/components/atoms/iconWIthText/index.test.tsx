import { render, screen } from "@testing-library/react";
import IconWithText from ".";
import TimeIcon from "../timeIcon";
it("IconWithText - Unit Test", () => {
  render(<IconWithText title="13-Minute Left" children={TimeIcon} />);
  const text = screen.getByText(/13-minute Left/i);
  expect(text).toBeInTheDocument();
});
