'use client';
import React from 'react';
import { Box, Grid } from '@mantine/core';
import useNewPost from './useNewPost';
import PostCard from './components/PostCard';
import PostSummary from './components/PostSummary';
import PostCategories from './components/PostCategories';
import FeaturedImage from './components/FeaturedImage';

export default function NewPost() {
  const {
    form,
    handleSubmit
  } = useNewPost();
  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Grid gutter="30px">
        <Grid.Col span={8}>
          <PostCard form={form} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Grid gutter="30px">
            <Grid.Col span={12}>
              <PostSummary form={form} />
            </Grid.Col>
            <Grid.Col span={12}>
              <PostCategories form={form} />
            </Grid.Col>
            <Grid.Col span={12}>
              <FeaturedImage form={form} />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </form>
  )
}
