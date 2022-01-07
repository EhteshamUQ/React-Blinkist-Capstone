import { ComponentStory } from "@storybook/react";
import SloganLogo from ".";

export default {
  title: "molecules/SloganLogo",
  component: SloganLogo,
};

const Template: ComponentStory<typeof SloganLogo> = (args) => (
  <SloganLogo {...args} />
);

export const sloganDemo = Template.bind({});

sloganDemo.args = {
  title: "Blinkist",
};
