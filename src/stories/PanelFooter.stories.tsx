import React from 'react';
import type { Meta } from '@storybook/react';
import { BoltIcon } from '@heroicons/react/16/solid';

import PanelFooter from '../components/PanelFooter/PanelFooter';

export default {
  title: 'Components/PanelFooter',
  component: PanelFooter,
} as Meta<typeof PanelFooter>;

export const Default = () => (
  <PanelFooter primaryButtonLabel="Submit" />
);

export const WithIcon = () => (
  <PanelFooter
    Icon={BoltIcon}
    primaryButtonLabel="Create Account"
  />
);