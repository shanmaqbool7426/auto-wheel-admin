'use client';
import React from 'react';
import { Box, Grid } from '@mantine/core';
import OverviewCard from './OverviewCard';

export default function Dashboard() {
  return (
    <Box>
      <Grid>
        <Grid.Col span={3}>
          <OverviewCard
            title="Visitors"
            value="130"
          />
        </Grid.Col>
      </Grid>
    </Box>
  )
}
