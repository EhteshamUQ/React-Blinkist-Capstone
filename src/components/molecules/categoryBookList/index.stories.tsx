import { ThemeProvider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CategoryBookList from ".";
import theme from "../../../theme";
import { title as t, bookList as bl } from "./data";
import "../../../index.css";
export default {
  title: "molecules/CategoryBookList",
  component: CategoryBookList,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof CategoryBookList>;

const Template: ComponentStory<typeof CategoryBookList> = (args) => (
  <CategoryBookList {...args} />
);

export const readingList = Template.bind({});

readingList.args = {
  title: t,
  bookList: bl,
};
