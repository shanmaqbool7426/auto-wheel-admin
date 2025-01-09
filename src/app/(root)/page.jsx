import React, { Suspense } from 'react';
import { Box } from "@mantine/core";
import Dashboard from "@/modules/Dashboard";
import ClientWrapper from '@/components/ClientWrapper';
  
export default function Home() {
  return (
    <ClientWrapper>
      <Dashboard />
    </ClientWrapper>
  );
}
