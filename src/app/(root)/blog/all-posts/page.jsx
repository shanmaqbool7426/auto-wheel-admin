import React from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const BlogPosts = dynamic(() => import('@/components/BlogPosts'), {
  ssr: false,
  loading: () => <Loading />
});

export default function AllPostsPage() {
  return <BlogPosts />;
}
