import React from 'react';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

};
// .storybook/preview.js
import '../src/index.css';
import {GlobalStyle} from '../src/global';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export default {
  title: 'Button',
  parameters: {
    backgrounds: {
      default: 'teal',
      values: [
        { name: 'teal', value: 'inear-gradient(96.45deg, #698F9A 0%, #255A68 100%)' },
        { name: 'facebook', value: '#3b5998' },
      ],
    },
  },
};