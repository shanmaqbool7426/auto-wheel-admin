'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGetVehicleByIdQuery } from '@/services/vehicle-manage';
import AddVehicle from '@/modules/AddVehicle';
import { LoadingOverlay } from '@mantine/core';

function AddVehicleWithParams() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  const { data: vehicleData, isLoading } = useGetVehicleByIdQuery(id, {
    skip: !id
  });

  if (isLoading) {
    return <LoadingOverlay visible />;
  }

  if (!id) {
    return <AddVehicle />;
  }

  return <AddVehicle editData={vehicleData} />;
}

export default function EditVehiclePage() {
  return (
    <Suspense fallback={<LoadingOverlay visible />}>
      <AddVehicleWithParams />
    </Suspense>
  );
}