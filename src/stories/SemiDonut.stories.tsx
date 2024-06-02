import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import SemiDonut from '../components/SemiDonut/SemiDonut';

export default {
  title: 'Components/SemiDonut',
  component: SemiDonut,
} as Meta<typeof SemiDonut>;

const Template: StoryFn<typeof SemiDonut> = (args) => <SemiDonut {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: 200,
  value: 75,
  label: '75%',
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  height: 300,
  value: 60,
  label: '60%',
};

export const CustomValue = Template.bind({});
CustomValue.args = {
  height: 200,
  value: 40,
  label: '40%',
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  height: 200,
  value: 80,
  label: 'Custom Label',
};