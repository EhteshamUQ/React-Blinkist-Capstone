import { ComponentStory } from "@storybook/react";
import FooterNavLists from ".";
import { titles, subtitlesList } from "./titles";

export default {
  title: "molecules/FooterNavLists",
  component: FooterNavLists,
};

const Template: ComponentStory<typeof FooterNavLists> = (args) => (
  <FooterNavLists {...args} />
);

export const footerNavLi = Template.bind({});
footerNavLi.args = {
  titles: titles,
  itemLists: subtitlesList,
};
