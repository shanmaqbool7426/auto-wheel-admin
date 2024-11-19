import React from 'react';
import { Box } from '@mantine/core';
import styles from './FolderCard.module.css';
import { IconFolder, IconFolderAction } from '@/assets/icons';

export default function FolderCard({ data }) {
  return (
    <Box className={styles.card}>
      <Box className={styles.cardTop}>
        <Box className={styles.cardIcon}>
          <IconFolder />
        </Box>
        <Box className={styles.cardAction}>
          <IconFolderAction />
        </Box>
      </Box>
      <Box className={styles.cardTitle}>{data.title}</Box>
      <Box className={styles.cardFooter}>
        <Box className={styles.cardFooterText}>{data.files} Files</Box>
        <Box className={styles.cardFooterText}>{data.size} GB</Box>
      </Box>
    </Box>
  )
}
