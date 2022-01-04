import { ComponentStory } from "@storybook/react";
import NavItems from "./navitems";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default {
  title: "NavItems",
  component: NavItems,
};

const Temlplate: ComponentStory<typeof NavItems> = (args) => (
  <NavItems {...args} />
);

export const withoutIcon = Temlplate.bind({});
withoutIcon.args = {
  title: "NavLink",
};

export const withIcon = Temlplate.bind({});
withIcon.args = {
  title: "NavLinks",
  dropdown: true,
};
