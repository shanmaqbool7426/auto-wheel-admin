import React, { Suspense } from 'react';
import AllPosts from '@/modules/Blog/AllPosts'

export default function AllPostsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllPosts />
    </Suspense>
  )
}
