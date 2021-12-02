import { Image } from './Image';
import React from 'react';

export default {
  title: 'Components/Image',
  component: Image,
};

const Template = (args) => <Image {...args}></Image>;

export const London = Template.bind({});
London.args = {
  srcUrl: 'https://picsum.photos/id/441/800',
};

export const Forest = Template.bind({});
Forest.args = {
  srcUrl: 'https://picsum.photos/id/412/800',
};

export const ForestBridge = Template.bind({});
ForestBridge.args = {
  srcUrl: 'https://picsum.photos/id/879/800',
};
// <img src="https://picsum.photos/id/441/800" />

// forest
// <img src="https://picsum.photos/id/412/800" />

// forest bridge
// <img src="https://picsum.photos/id/879/800" />
