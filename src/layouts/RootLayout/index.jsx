'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppShell,
  Burger,
  ScrollArea,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navbar from './Navbar';
import logo from '@/assets/images/brand/logo.svg';
import Header from './Header';
import styles from './Rootlayout.module.css'

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
      classNames={{
        header: styles.header,
        navbar: styles.navbar,
        main: styles.main,
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar p={0}>
        <AppShell.Section>
          <Box className={styles.navbarHeader}>
            <Box className={styles.logo}>
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
        <Box className={styles.mainContent}>
          {children}
        </Box>
      </AppShell.Main>
    </AppShell>
  )
}
