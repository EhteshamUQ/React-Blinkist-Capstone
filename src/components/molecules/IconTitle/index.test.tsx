import { render, screen } from "@testing-library/react";
import IconWithText from "../../atoms/iconWIthText";
import PersonIcon from "../../icons/personIcon";

test("should display icon with title", () => {
  render(<IconWithText children={PersonIcon} title="34k reads" />);
  const text = screen.getByText(/34k reads/i);
  const icon = screen.getByTestId(/personicon/i);
  expect(text).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
});
