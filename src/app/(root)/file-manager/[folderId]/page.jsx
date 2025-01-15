import React, { Suspense } from 'react';
import Files from '@/modules/FileManager/Files';
import ClientWrapper from '@/components/ClientWrapper';

export default function FileManagerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientWrapper>
        <Files />
      </ClientWrapper>
    </Suspense>
  )
}

