import { ThemeProvider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BookDetails from ".";
import theme from "../../../theme";

export default {
  title: "organisms/BookDetails",
  component: BookDetails,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof BookDetails>;

const Template: ComponentStory<typeof BookDetails> = (args) => (
  <BookDetails {...args} />
);

export const bookDetail = Template.bind({});
bookDetail.args = {
  title: "Beyond Enterpreneurship 2.0",
  subtitle: "Turning Your Business into an Enduring Great Company",
  readTime: "12",
  imagePath: "./images/1.png",
  author: "By Jim Collins and Bill Lazier",
  synopsis:
    "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
};
