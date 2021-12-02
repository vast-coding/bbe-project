import { BiBell } from 'react-icons/bi';
import { Button } from './Button';
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args}></Button>;

export const London = Template.bind({});
London.args = {
  srcUrl: 'https://picsum.photos/id/441/800',
};

export const Red = Template.bind({});
Red.args = {
  color: 'green',
  Children: <BiBell />,
};
