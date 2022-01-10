import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner from ".";
import theme from "../../../theme";
export default {
  title: "organisms/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const primaryBanner = Template.bind({});

primaryBanner.args = {
  title: "Explore Books on entrepreneurship",
  subtitle:
    "Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.",
};

primaryBanner.decorators = [
  (Story) => (
    <MUIThemeProvider theme={theme}>
      <Story />
    </MUIThemeProvider>
  ),
];
