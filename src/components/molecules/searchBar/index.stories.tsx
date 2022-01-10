import { ComponentStory } from "@storybook/react";
import SearchBar from ".";

export default {
  title: "molecules/SearchBar",
  component: SearchBar,
};

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const bar = Template.bind({});

bar.args ={
    placeholder :"Search by title or author"
 }
