import { ComponentStory } from "@storybook/react";
import IconTitle from ".";

export default {
  title: "molecules/iconTitle",
  component: IconTitle,
  argTypes: {
    onClick: {
      action: "Clicked",
    },
  },
};

const Template: ComponentStory<typeof IconTitle> = (args) => (
  <IconTitle {...args} />
);

export const entre = Template.bind({});
entre.args = {
  icon: (
    <svg
      width="16"
      height="23"
      viewBox="0 0 16 23"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.502 19C10.8404 20.5823 9.58232 21.8404 8 22.502C6.41768 21.8404 5.15956 20.5823 4.498 19H6.758C7.084 19.489 7.505 19.912 8 20.243C8.495 19.913 8.916 19.489 9.243 19H11.502ZM14 13.805L16 16.073V18H0V16.073L2 13.805V7.99996C2 4.51696 4.504 1.55296 8 0.454956C11.496 1.55296 14 4.51696 14 7.99996V13.805ZM13.27 16L12 14.56V7.99996C12 5.68196 10.43 3.56996 8 2.57996C5.57 3.56996 4 5.68096 4 7.99996V14.56L2.73 16H13.27ZM8 9.99996C7.46957 9.99996 6.96086 9.78924 6.58579 9.41417C6.21071 9.0391 6 8.53039 6 7.99996C6 7.46952 6.21071 6.96082 6.58579 6.58574C6.96086 6.21067 7.46957 5.99996 8 5.99996C8.53043 5.99996 9.03914 6.21067 9.41421 6.58574C9.78929 6.96082 10 7.46952 10 7.99996C10 8.53039 9.78929 9.0391 9.41421 9.41417C9.03914 9.78924 8.53043 9.99996 8 9.99996Z" />
    </svg>
  ),
  title: "Entrepreneurship",
};
