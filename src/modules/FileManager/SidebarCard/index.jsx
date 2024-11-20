import React from 'react';
import { Box, SemiCircleProgress } from '@mantine/core';
import styles from './SidebarCard.module.css';
import useSidebarCard from './useSidebarCard';

export default function SidebarCard() {
  const { value } = useSidebarCard();
  return (
    <Box className={styles.sidebarCard}>
      <Box className={styles.sidebarHeading}>Storage</Box>
      <Box className={styles.progressbar}>
        <SemiCircleProgress
          value={value}
          transitionDuration={250}
          label={`${value}%`}
          filledSegmentColor="#1B84FF"
          size={110}
          thickness={10}
        />
      </Box>
      <Box className={styles.progressbarText}>
        48.02 GB (76%) of 64 GB used
      </Box>

    </Box>
  )
}
