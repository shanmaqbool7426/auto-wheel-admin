import ClientWrapper from '@/components/ClientWrapper';
import AllPosts from '@/modules/Blog/AllPosts';

export default function AllPostsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientWrapper>
        <AllPosts />
      </ClientWrapper>
    </Suspense>
  );
}
  