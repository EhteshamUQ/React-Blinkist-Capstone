import { ThemeProvider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CategoryBookList from ".";
import theme from "../../../theme";
import '../../../index.css';
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
  title: "Trending Blinks",
  bookList: [
    {
      title: "The Fault in our Stars",
      author: "me",
      readTime: "15",
      reads: "100",
      imagePath: "/images/3.png",
      owned: true,
    },
    {
      title: "The Fault in our Stars",
      author: "me",
      readTime: "15",
      reads: "100",
      imagePath: "/images/3.png",
      owned: true,
    },
    {
      title: "The Fault in our Stars",
      author: "me",
      readTime: "15",
      reads: "100",
      imagePath: "/images/3.png",
      owned: true,
    },
    {
      title: "The Fault in our Stars",
      author: "me",
      readTime: "15",
      reads: "100",
      imagePath: "/images/3.png",
      owned: true,
    },
    {
      title: "The Fault in our Stars",
      author: "me",
      readTime: "15",
      reads: "100",
      imagePath: "/images/3.png",
      owned: true,
    },
    {
      title: "The Fault in our Stars",
      author: "me",
      readTime: "15",
      reads: "100",
      imagePath: "/images/3.png",
      owned: true,
    },
    {
      title: "The Fault in our Stars",
      author: "me",
      readTime: "15",
      reads: "100",
      imagePath: "/images/3.png",
      owned: true,
    },
  ],
};
