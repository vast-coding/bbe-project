import React from 'react';
import { Squash } from './Squash';

export default {
  title: 'Components/Squash',
  component: Squash,
};

const Template = (args) => <Squash {...args}></Squash>;

export const Variation1 = Template.bind({});
Variation1.args = {
  duration: '.3s',
  isOpen:true ,
  children: <div style={{border:'1px solid red'}}>hi</div>
};

export const Variation2 = Template.bind({});
Variation2.args = {
  duration: '.3s',
  isOpen:false ,
  children: <div style={{border:'1px solid red'}}>hi</div>
};



