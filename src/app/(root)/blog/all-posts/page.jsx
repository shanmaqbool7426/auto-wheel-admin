import React, { Suspense } from 'react';
import AllPosts from '@/modules/Blog/AllPosts'
import ClientWrapper from '@/components/ClientWrapper';

export default function BlogAllPostsPage() {
  return (
    <ClientWrapper>
      <AllPosts />
    </ClientWrapper>
  );
}
