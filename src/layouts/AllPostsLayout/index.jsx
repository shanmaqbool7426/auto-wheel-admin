'use client';
import React from "react";
import { useParams, useRouter } from 'next/navigation'
import { Tabs, Box } from '@mantine/core';
import { PATH_NAME } from "@/constants/pathname";
import styles from './AllPostsLayout.module.css'

export default function AllPostsLayout({ children }) {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <Tabs
        value={params?.activeTab || 'all'}
        onChange={(value) => router.push(`${PATH_NAME.BLOG_ALL_POSTS}/${value}`)}
        classNames={{
          list: styles.list,
          tab: styles.tab,
          tabLabel: styles.tabLabel,
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="all">All (628)</Tabs.Tab>
          <Tabs.Tab value="mine">Mine (342)</Tabs.Tab>
          <Tabs.Tab value="published">Published (342)</Tabs.Tab>
          <Tabs.Tab value="draft">Draft (234)</Tabs.Tab>
          <Tabs.Tab value="trash">Trash (0)</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Box>
        {children}
      </Box>
    </>
  )
}