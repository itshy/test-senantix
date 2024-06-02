import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import SpeedometerCard from '../components/SpeedometerCard/SpeedometerCard';

export default {
  title: 'Components/SpeedometerCard',
  component: SpeedometerCard,
} as Meta<typeof SpeedometerCard>;

const Template: StoryFn<typeof SpeedometerCard> = (args) => <SpeedometerCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "You've almost reached your limit",
  description: "You've used 80% of your available spots. Upgrade plan to create more projects.",
  width: 365,
  headerTitle: 'App limits',
  value: 80,
};

export const CustomDescription = Template.bind({});
CustomDescription.args = {
  ...Default.args,
  description: 'This is a custom description. You can provide your own description here.',
};

export const CustomDescriptionWithJSX = Template.bind({});
CustomDescriptionWithJSX.args = {
  ...Default.args,
  description: (
    <>
      This is a custom description with <strong>JSX</strong>.
      <br />
      You can include any valid JSX elements here.
    </>
  ),
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...Default.args,
  width: 500,
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  title: '',
  description: '',
  headerTitle: '',
  value: 0,
};