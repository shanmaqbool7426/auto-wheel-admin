'use client';
import { useSearchParams } from 'next/navigation';
import { useGetVehicleByIdQuery } from '@/services/vehicle-manage';
import AddVehicle from '@/modules/AddVehicle';
import { LoadingOverlay } from '@mantine/core';

export default function EditVehiclePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  console.log("id>>>>>>>>>", id)
  // Only fetch if we have an ID
  const { data: vehicleData, isLoading } = useGetVehicleByIdQuery(id, {
    skip: !id // Skip the query if there's no ID
  });

  if (isLoading) {
    return <LoadingOverlay visible />;
  }

  // If there's no ID, or no data needed, render empty form
  if (!id) {
    return <AddVehicle />;
  }

  // If we have data, render form with edit data
  return <AddVehicle editData={vehicleData} />;
}