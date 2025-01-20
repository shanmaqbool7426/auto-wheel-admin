import React from 'react';
import AllPosts from '@/modules/Blog/AllPosts';
import ClientWrapper from '@/components/ClientWrapper';

export default function AllPostsPage() {
  return (
    <ClientWrapper>
      <AllPosts />
    </ClientWrapper>
  );
}
