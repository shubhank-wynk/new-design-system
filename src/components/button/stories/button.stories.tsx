import React from 'react';

import Button from '../button';
import Props from '../button.types';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    size: { control: { type: 'inline-radio', options: ['large', 'medium', 'small'] } },
    backgroundColor: { control: 'color' },
  },
};

export const Primary = (args: Props) => <Button {...args} />;
Primary.args = {
  label: 'Button',
  primary: true,
};

export const Secondary = (args: Props) => <Button {...args} />;
Secondary.args = {
  label: 'Button',
  primary: false,
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
