import { ComponentStory } from "@storybook/react";
import ProgressBar from ".";

export default {
  component: ProgressBar,
  title: "atoms/progressBar",
};

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar />;
export const bar = Template.bind({});

bar.args = {
  percentComplete: 20,
};
