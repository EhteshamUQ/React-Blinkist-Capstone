import { ComponentStory } from "@storybook/react";
import FooterNavLists from ".";

export default {
  title: "molecules/FooterNavLists",
  component: FooterNavLists,
};

const titles = ["Editorial", "useful links", "Company"];
const subtitlesList = [
  [
    "Book Lists",
    "What is nonFiction",
    "What to read next",
    "Benefits of reading",
  ],
  [
    "Pricing",
    "Blinkist Business",
    "Gift Cards",
    "Blinkist magazine",
    "Contact & help",
  ],
  ["About", "Careers", "Partners", "Code of Conduct"],
];

const Template: ComponentStory<typeof FooterNavLists> = (args) => (
  <FooterNavLists {...args} />
);

export const footerNavLi = Template.bind({});
footerNavLi.args = {
  titles: titles,
  itemLists: subtitlesList,
};
