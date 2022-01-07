import { ComponentStory } from "@storybook/react";
import NavItems from ".";
export default {
  title: "molecules/NavItems",
  component: NavItems,
  argTypes: { onClick: { action: "Pressed" } },
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
