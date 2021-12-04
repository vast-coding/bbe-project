import React from 'react';
import { Slide } from './Slide';

export default {
  title: 'Components/Slide',
  component: Slide,
};

const Template = (args) => <Slide {...args}></Slide>;

export const Variation1 = Template.bind({});
Variation1.args = {
  duration: '.3s',
  isOpen: true,
  children: <div style={{ border: '1px solid red' }}>hi</div>,
};

export const Variation2 = Template.bind({});
Variation2.args = {
  duration: '.3s',
  isOpen: false,
  children: <div style={{ border: '1px solid red' }}>hi</div>,
};
