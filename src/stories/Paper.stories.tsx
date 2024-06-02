import React from 'react';
import type { Meta } from '@storybook/react';

import Paper from '../components/Paper/Paper';

export default {
  title: 'Components/Paper',
  component: Paper,
} as Meta<typeof Paper>;

export const Default = () => (
  <Paper>
    <h2>Default Paper</h2>
    <p>This is the content inside the Paper component.</p>
  </Paper>
);

export const CustomWidth = () => (
  <Paper width="300px">
    <h2>Custom Width Paper</h2>
    <p>This Paper component has a custom width of 300px.</p>
  </Paper>
);
