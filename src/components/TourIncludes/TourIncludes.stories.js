import React from 'react';
import { TourIncludes } from './TourIncludes';

export default {
  title: 'Components/TourIncludes',
  component: TourIncludes,
};

const Template = (args) => <TourIncludes {...args}></TourIncludes>;

export const Default = Template.bind({});
Default.args = {};
