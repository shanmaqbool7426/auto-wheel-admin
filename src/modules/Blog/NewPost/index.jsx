'use client'
import React, { useEffect }  from 'react';
import { Box, Grid } from '@mantine/core';
import useNewPost from './useNewPost';
import PostCard from './components/PostCard';
import PostSummary from './components/PostSummary';
import PostCategories from './components/PostCategories';
import FeaturedImage from './components/FeaturedImage';
import { generateSlug } from '@/utils/helpers';

export default function NewPost() {
  const {
    form,
    handleSubmit,
    isLoading,
    categoriesData,
    tagsData
  } = useNewPost();



  console.log('categoriesData?.data: ', categoriesData?.data)
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Grid gutter="30px">
        <Grid.Col span={8}>
          <PostCard form={form} isLoading={isLoading} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Grid gutter="30px">
            <Grid.Col span={12}>
              <PostSummary form={form} />
            </Grid.Col>
            <Grid.Col span={12}>
              <PostCategories form={form} categoriesData={categoriesData?.data?.data} tagsData={tagsData?.data?.data} />
            </Grid.Col>
            <Grid.Col span={12}>
              <FeaturedImage form={form} />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </form>
  );
}