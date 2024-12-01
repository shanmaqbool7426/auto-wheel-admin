'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { LoadingOverlay } from '@mantine/core';
import NewPost from '@/modules/Blog/NewPost';
import {  useGetPostQuery } from '@/services/blog/posts';
// import ErrorBoundary from '@/components/ErrorBoundary';

export default function NewPostPage() {
  const searchParams = useSearchParams();
  const postId = '673aeb9a7e25b6693247d6f3'
  
  // Only fetch if we have a postId (edit mode)
  const { data: post, isLoading, error } = useGetPostQuery(postId, {
    skip: !postId,
  });

  if (error) {
    return (
      <div className="error-container">
        <h2>Error Loading Post</h2>
        <p>{error.message || 'Failed to load post details'}</p>
      </div>
    );
  }

  if (postId && isLoading) {
    return <LoadingOverlay visible />;
  }

  return (
    // <ErrorBoundary>
      <div className="post-page-container">
        <h1 className="page-title">
          {postId ? 'Edit Post' : 'Create New Post'}
        </h1>
        <NewPost post={post} />
      </div>
    // </ErrorBoundary>
  );
}