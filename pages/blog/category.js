import React, { Suspense } from 'react';
// ...existing code...

const Category = () => {
  // ...existing code...
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Your component code that uses useSearchParams */}
      // ...existing code...
    </Suspense>
  );
};

// ...existing code...
export default Category;
