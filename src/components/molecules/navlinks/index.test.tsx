import { render } from "@testing-library/react";
import NavItems from ".";

test('should display NavItems and also Demonstrate OnClick', () => {
    render(<NavItems title="NavItem"/>)
})
