'use client';
import { useForm } from '@mantine/form';
import { useGetComparisonMutation } from '@/services/newVehicles';

export default function useAddCompare(setOnClose) {
  const form = useForm({
    initialValues: {
      selectedVehicles: [],
    },
    validate: {
      selectedVehicles: (value) => 
        (!value || value.length < 2) ? 'Select at least 2 vehicles to compare' : null,
    },
  });

  const [getComparison, { isLoading }] = useGetComparisonMutation();

  const handleAddToCompare = (vehicle) => {
    const currentVehicles = form.values.selectedVehicles;
    if (currentVehicles.length >= 3) {
    //   errorSnackbar('You can compare up to 3 vehicles');
      return;
    }
    if (!currentVehicles.some(v => v._id === vehicle._id)) {
      form.setFieldValue('selectedVehicles', [...currentVehicles, vehicle]);
    //   successSnackbar('Vehicle added to comparison');
    }
  };

  const handleRemoveFromCompare = (vehicleId) => {
    form.setFieldValue(
      'selectedVehicles',
      form.values.selectedVehicles.filter(v => v._id !== vehicleId)
    );
  };

  const handleClearCompare = () => {
    form.setFieldValue('selectedVehicles', []);
  };

  const handleSubmit = async (values) => {
    try {
      const result = await getComparison({
        vehicleIds: values.selectedVehicles.map(v => v._id)
      }).unwrap();
    //   successSnackbar('Comparison successful');
      setOnClose(false);
      return result;
    } catch (error) {
    //   errorSnackbar('Failed to compare vehicles');
      console.error('Comparison error:', error);
    }
  };

  return {
    form,
    isLoading,
    handleAddToCompare,
    handleRemoveFromCompare,
    handleClearCompare,
    handleSubmit,
  };
}