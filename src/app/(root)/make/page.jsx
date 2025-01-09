import React, { Suspense } from 'react';
import Makes from '@/modules/Makes';

export default function MakePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Makes />
    </Suspense>
  )
}



