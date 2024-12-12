'use client';
import React from 'react';
import { Box, Grid } from '@mantine/core';
import OverviewSection from './OverviewSection';
import LocationBaseUser from './LocationBaseUser';
import TopPerformingPost from './TopPerformingPost';
import UserReviews from './UserReviews';
import LatestNotificationPost from './LatestNotificationPost';

export default function Dashboard() {
  return (
    <Box>
      <OverviewSection />

      <LocationBaseUser />

      <TopPerformingPost />

      <section style={{ paddingTop: '24px' }}>
        <Grid>
          <Grid.Col span={6}>
            <UserReviews />
          </Grid.Col>
          <Grid.Col span={6}>
            <LatestNotificationPost />
          </Grid.Col>
        </Grid>
      </section>
    </Box>
  )
}
