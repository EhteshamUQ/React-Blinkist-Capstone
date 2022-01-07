import { ComponentStory } from "@storybook/react";
import FooterNavList from ".";

export default {
  title: "molecules/FooterList",
  component: FooterNavList,
};

const Template: ComponentStory<typeof FooterNavList> = (args) => (
  <FooterNavList {...args} />
);

export const demoFooterList = Template.bind({});
demoFooterList.args = {
  title: "Demo",
  items: ["Book List", "World List"],
};
