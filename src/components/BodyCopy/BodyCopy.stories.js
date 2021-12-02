import { BodyCopy } from './BodyCopy';
import React from 'react';

export default {
  title: 'Components/BodyCopy',
  component: BodyCopy,
};

const Template = (args) => <BodyCopy {...args}></BodyCopy>;

export const Default = Template.bind({});
Default.args = {};
