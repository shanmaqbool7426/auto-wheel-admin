import React from 'react';
import CounterPreview from './CounterPreview';
import { Box } from '@mantine/core';

export default function Dashboard() {
  return (
    <Box style={{ height: '100%' }}>
      <CounterPreview />
    </Box>
  )
}
