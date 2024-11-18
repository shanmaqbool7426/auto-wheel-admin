'use client';
import React from 'react';
import { Box, Stack } from '@mantine/core';
import useProfileSettings from './useProfileSettings';
import styles from './ProfileSettings.module.css';
import PersonalInformation from './components/PersonalInformation';
import Permissions from './components/Permissions';
import ProfileInformation from './components/ProfileInformation';
import LastLogin from './components/LastLogin';
import ChangePassword from './components/ChangePassword';

export default function ProfileSettings() {

  const { } = useProfileSettings();

  return (
    <Box className={styles.wrapper}>
      <Box className={styles.sidebar}>
        <Stack gap="24px">
          <ProfileInformation />
          <LastLogin />
        </Stack>
      </Box>

      <Box className={styles.content}>
        <Stack gap="24px">
          <PersonalInformation />
          <Permissions />
          <ChangePassword />
        </Stack>
      </Box>
    </Box>
  )
}
