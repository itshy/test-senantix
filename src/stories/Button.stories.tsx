import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { BoltIcon } from '@heroicons/react/16/solid';

import Button from '../components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  Icon: BoltIcon,
  children: 'Button with Icon',
};