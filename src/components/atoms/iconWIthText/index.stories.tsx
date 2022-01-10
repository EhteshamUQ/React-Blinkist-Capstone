import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { ThemeProvider } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import IconWIthText from ".";
import theme from "../../../theme";
export default {
  title: "molecules/IconWIthText",
  component: IconWIthText,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof IconWIthText>;

const Template: ComponentStory<typeof IconWIthText> = (args) => (
  <IconWIthText {...args} />
);

export const firstIconWithText = Template.bind({});
firstIconWithText.args = {
  title: "13-minute left",
  children: <AccessTimeIcon fontSize="inherit" />,
};
