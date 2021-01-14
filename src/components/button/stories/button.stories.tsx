import React from 'react';
import Button from '../button';
import Props from '../button.types';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
    shape: {control :{type : 'inline-radio', options:['circle','rounded','default']}},
    size:  {control :{type: 'inline-radio', options: ['large', 'small','default'] } },
    type: {control :{type: 'inline-radio', options: ['secoundary','tertiary','default']}},
    theme: {control :{type: 'inline-radio', options: ['teal','orange']}},
  },
};

export const Small = (args: Props) => <Button {...args} />;
Small.args = {
  label: 'Button',
  size: 'small',
};
export const Circle = (args: Props) => <Button {...args} />;
Circle.args = {
  label: '+',
  shape: 'circle',
};
export const Rounded = (args: Props) => <Button {...args} />;
Rounded.args = {
  label: 'Rounded',
  shape: 'rounded',
};
export const Secoundary = (args: Props) => <Button {...args} />;
Secoundary.args = {
  label: 'Secoundary',
  theme:'orange',
  type: 'secoundary',
};
export const Tertiary = (args: Props) => <Button {...args} />;
Tertiary.args = {
  label: 'Tertiary',
  type: 'tertiary',
};
