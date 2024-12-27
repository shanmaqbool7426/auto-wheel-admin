'use client';
import { useParams } from 'next/navigation';
import { useGetVehicleByIdQuery } from '@/services/vehicle-manage';
import AddVehicle from '@/modules/AddVehicle';
import { LoadingOverlay } from '@mantine/core';

export default function EditVehiclePage() {
  const { id } = useParams();
  const { data: vehicleData, isLoading } = useGetVehicleByIdQuery("67671a7fc0e9f5410d3b7f50");

  console.log("vehicleData>>>>>>>>>", vehicleData)

  if (isLoading) {
    return <LoadingOverlay visible />;
  }

  return <AddVehicle editData={vehicleData} />;
}