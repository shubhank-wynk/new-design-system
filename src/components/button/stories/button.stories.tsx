import React from 'react';
import Button from '../button';
import Props from '../button.types';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
    shape: {control :{type : 'inline-radio', options:['circle','round','default']}},
    size:  {control :{type: 'inline-radio', options: ['large', 'medium', 'small'] } },
    type: {control :{type: 'inline-radio', options: ['outlined','link','default']}},
    theme: {control :{type: 'inline-radio', options: ['primary','sucess','default']}},
  },
};

export const Large = (args: Props) => <Button {...args} />;
Large.args = {
  label: 'Button',
  size: 'large',
};

export const Small = (args: Props) => <Button {...args} />;
Small.args = {
  label: 'Button',
  size: 'small',
};
export const Circle = (args: Props) => <Button {...args} />;
Circle.args = {
  label: 'Button',
  shape: 'circle',
};
export const Round = (args: Props) => <Button {...args} />;
Round.args = {
  label: 'Button',
  shape: 'round',
};
export const Outlined = (args: Props) => <Button {...args} />;
Outlined.args = {
  label: 'Button',
  type: 'outlined',
};
export const Link = (args: Props) => <Button {...args} />;
Link.args = {
  label: 'Button',
  type: 'link',
};
