import { ComponentMeta, ComponentStory } from "@storybook/react";
import ReadingBanner from ".";

export default {
  title: "atoms/ReadingBanner",
  component: ReadingBanner,
} as ComponentMeta<typeof ReadingBanner>;

export const banner: ComponentStory<typeof ReadingBanner> = () => (
  <ReadingBanner />
);
