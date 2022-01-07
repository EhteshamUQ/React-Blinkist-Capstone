import { ComponentStory } from "@storybook/react";
import SiteMap from ".";

export default {
    title : 'molecules/sitemap',
    component: SiteMap
}

const Template: ComponentStory<typeof SiteMap> = (args) => <SiteMap {...args}/>

export const sitemap = Template.bind({});

sitemap.args = {};