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