import React from 'react'
import Card from '@/components/Card'
import { Box } from '@mantine/core'
import styles from './OverviewCard.module.css'

export default function OverviewCard({ title, value }) {
  return (
    <Card>
      <Box className={styles.title}>{title}</Box>
      <Box className={styles.value}>{value}</Box>
      <Box className={styles.footer}>
        <Box className={styles.footerDay}>Today</Box>
        <Box></Box>
      </Box>
    </Card>
  )
}
