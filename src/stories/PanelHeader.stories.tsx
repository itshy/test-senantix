import React from 'react';
import type { Meta } from '@storybook/react';

import PanelHeader from '../components/PanelHeader/PanelHeader';

export default {
  title: 'Components/PanelHeader',
  component: PanelHeader,
} as Meta<typeof PanelHeader>;

export const Default = () => (
  <PanelHeader title="Default Panel Header" />
);

export const LongTitle = () => (
  <PanelHeader title="Panel Header with a Long Title Text" />
);

export const EmptyTitle = () => (
  <PanelHeader title="" />
);