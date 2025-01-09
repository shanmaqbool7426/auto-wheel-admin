import React, { Suspense } from 'react';
import { Box } from "@mantine/core";
import Dashboard from "@/modules/Dashboard";


export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
