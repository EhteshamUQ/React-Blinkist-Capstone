import { ThemeProvider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../../theme";
import EntrePage from ".";

export default {
  title: "pages/Entre",
  component: EntrePage,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof EntrePage>;

const Template: ComponentStory<typeof EntrePage> = (args) => <EntrePage />;

export const page = Template.bind({});

