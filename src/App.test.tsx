import { render , screen } from "@testing-library/react";
import App from './App';
test('should Display App', () => {
    render(<App />);
    const explore = screen.getByText(/Explore/i);
    expect(explore).toBeInTheDocument();
})
