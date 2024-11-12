'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppShell,
  Burger,
  Group,
  Skeleton,
  Text,
  ScrollArea,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { styles } from './RootLayout.style';
import Navbar from './Navbar';
import logo from '@/assets/images/brand/logo.svg';
import Header from './Header';

export default function RootLayout({ children }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      withBorder={false}
      layout="alt"
      header={{ height: 80 }}
      navbar={{
        width: 248,
        p: 0,
        // breakpoint: 'sm', collapsed: { mobile: !opened },
        padding: 0,
      }}
      padding={32}
      bg='#FDF8F8'
    >
      <AppShell.Header sx={styles.header}>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar p={0} sx={styles.sidebar}>
        <AppShell.Section>
          <Box sx={styles.navbarHeader}>
            <Box sx={styles.logo}>
              <Link href="/">
                <Image
                  src={logo}
                  alt="AutoWheels.pk"
                  width={163}
                  height={27}
                />
              </Link>
            </Box>
            <Burger
              // opened={opened}
              // onClick={toggle}
              size={16}
              lineSize={2}
            // hiddenFrom="sm" size="sm"
            />
          </Box>
        </AppShell.Section>

        <AppShell.Section grow component={ScrollArea}>
          <Navbar />
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
