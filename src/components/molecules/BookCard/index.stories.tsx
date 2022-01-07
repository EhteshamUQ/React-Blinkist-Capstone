import { ComponentStory } from "@storybook/react";
import React from "react";
import BookCard from ".";
import image1 from "../../../images/1.png";
export default {
  title: "molecules/BookCard",
  component: BookCard,
};

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
);

export const firstBookCard = Template.bind({});
firstBookCard.args = {
  imagePath: image1,
  title: "Bring your Human to Work",
  author: "Erica Keswin",
  readTime: "13",
  reads: "1.5",
};
