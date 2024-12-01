'use client'
import React, { useEffect }  from 'react';
import { Box, Grid, LoadingOverlay, Group, Button } from '@mantine/core';
import { useRouter } from 'next/navigation'; // or 'react-router-dom' if using React Router
import useNewPost from './useNewPost';
import PostCard from './components/PostCard';
import PostSummary from './components/PostSummary';
import PostCategories from './components/PostCategories';
import FeaturedImage from './components/FeaturedImage';
// import { ErrorBoundary } from '@/components/ErrorBoundary';
import { generateSlug } from '@/utils/helpers';

export default function NewPost({ post }) {
  const router = useRouter();
  const {
    form,
    handleSubmit,
    isLoading,
    categoriesData,
    tagsData,
    isEdit
  } = useNewPost(post);

  // Handle unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (form.isDirty()) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [form]);

  const handleCancel = () => {
    if (form.isDirty() && !window.confirm('You have unsaved changes. Are you sure you want to leave?')) {
      return;
    }
    router.push('/posts');
  };

  // Show loading state while fetching initial data
  if (categoriesData?.isLoading || tagsData?.isLoading) {
    return <LoadingOverlay visible />;
  }

  return (
    // <ErrorBoundary>
      <Box>
        <Group position="apart" mb="xl">
          <h2>{isEdit ? 'Edit Post' : 'Create New Post'}</h2>
          <Button 
            variant="outline" 
            color="gray" 
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancel
          </Button>
        </Group>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Grid gutter="30px">
            <Grid.Col span={8}>
              <PostCard 
                form={form} 
                isLoading={isLoading} 
                isEdit={isEdit} 
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <Grid gutter="30px">
                <Grid.Col span={12}>
                  <PostSummary form={form} />
                </Grid.Col>
                <Grid.Col span={12}>
                  <PostCategories 
                    form={form} 
                    categoriesData={categoriesData?.data?.data} 
                    tagsData={tagsData?.data?.data} 
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <FeaturedImage 
                    form={form} 
                    isEdit={isEdit} 
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </form>
      </Box>
    // </ErrorBoundary>
  );
}