import { Page } from './Page';
import React from 'react';

export default {
  title: 'Page',
  component: Page,
};

const Template = (args) => <Page {...args}></Page>;

export const Default = Template.bind({});
Default.args = {};
