import { ComponentStory } from "@storybook/react";
import Navbar from ".";

export default {
  title: "organisms/navbar",
  component: Navbar,
};

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const navbar = Template.bind({});
navbar.args = {};