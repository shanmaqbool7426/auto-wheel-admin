'use client';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => <div>Loading Chart...</div>
});

export default function DynamicApexChart(props) {
  return <ApexChart {...props} />;
} 