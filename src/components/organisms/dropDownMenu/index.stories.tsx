import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropDownMenu from ".";
import { icons, titles } from "../../icons/icons";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";

export default {
  title: "organisms/DropDownMenu",
  component: DropDownMenu,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof DropDownMenu>;
const Template: ComponentStory<typeof DropDownMenu> = (args) => (
  <DropDownMenu {...args} />
);

export const dropDown = Template.bind({});
dropDown.args = {
  icons: icons,
  titles: titles,
};
