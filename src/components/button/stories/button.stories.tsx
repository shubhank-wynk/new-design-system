import React from 'react';
import { AddOutlined, UserProfileOutlined } from 'src/components/icons/outlined';
import Button from '../button';
import Props from '../button.types';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
    shape: {control :{type : 'inline-radio', options:['circle','rounded','floating','default']}},
    size:  {control :{type: 'inline-radio', options: ['large', 'small','default'] } },
    type: {control :{type: 'inline-radio', options: ['secoundary','tertiary','default']}},
    theme: {control :{type: 'inline-radio', options: ['teal','orange']}},
  },
};

export const Default = (args: Props) => <Button {...args} />;
Default.args = {
  label: 'Button',
  size: 'default',
  theme: 'orange',
  type:'default',
  iconLeft:<UserProfileOutlined/>,
  iconRight:<UserProfileOutlined/>,
};
export const Circle = (args: Props) => <Button {...args} />;
Circle.args = {
  label: <AddOutlined />,
  shape: 'circle',
  theme:"orange",

};
export const Rounded = (args: Props) => <Button  {...args}  />;
Rounded.args = {
  iconLeft:<UserProfileOutlined/>,
  iconRight:<UserProfileOutlined/>,
  label: "Rounded",
  shape: 'rounded',
  theme:"orange",
  type:'default',

};
export const Floating = (args: Props) => <Button  {...args}  />;
Floating.args = {
  iconLeft:<UserProfileOutlined/>,
  iconRight:<UserProfileOutlined/>,
  label: "Floating Button",
  shape:"floating",
  size:"default",
  theme:"orange",
  type:"default",
};
export const Secoundary = (args: Props) => <Button {...args} />;
Secoundary.args = {
  label: 'Secoundary',
  theme:'orange',
  type: 'secoundary',
  iconLeft:<UserProfileOutlined/>,
  iconRight:<UserProfileOutlined/>,
};
export const Tertiary = (args: Props) => <Button {...args} />;
Tertiary.args = {
  label: 'Tertiary',
  type: 'tertiary',
  iconLeft:<UserProfileOutlined/>,
  iconRight:<UserProfileOutlined/>,
};
