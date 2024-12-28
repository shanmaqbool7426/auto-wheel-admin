'use client';
import { useState, useEffect } from 'react';
import { useGetNewVehiclesQuery, useGetComparisonMutation } from '@/services/newVehicles';
import { PAGE_SIZE } from '@/constants/pagination';
// import { successSnackbar, errorSnackbar } from '@/utils/snackbar';

export default function useCompareVehicle() {
  const [page, setPage] = useState(1);
  const [searchBy, setSearchBy] = useState('');
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [filterParams, setFilterParams] = useState({
    page,
    limit: PAGE_SIZE,
    search: searchBy
  });

  const maxVehicles = 3;

  // Queries and Mutations
  const { data: vehiclesData, isLoading: loadingVehicles, isFetching } = useGetNewVehiclesQuery(filterParams);
  const [getComparison, { isLoading: loadingCompare }] = useGetComparisonMutation();

  // Update filter params when search changes
  useEffect(() => {
    setFilterParams(prev => ({ ...prev, search: searchBy }));
  }, [searchBy]);

  // Update filter params when page changes
  useEffect(() => {
    setFilterParams(prev => ({ ...prev, page }));
  }, [page]);

  const handleSearch = (value) => {
    setSearchBy(value);
    setPage(1);
  };

  const handleAddToCompare = (vehicle) => {
    if (selectedVehicles.length >= maxVehicles) {
      errorSnackbar(`You can compare up to ${maxVehicles} vehicles`);
      return;
    }
    if (!selectedVehicles.some(v => v._id === vehicle._id)) {
      setSelectedVehicles(prev => [...prev, vehicle]);
      // successSnackbar('Vehicle added to comparison');
    }
  };

  const handleRemoveFromCompare = (vehicleId) => {
    setSelectedVehicles(prev => prev.filter(v => v._id !== vehicleId));
  };

  const handleClearCompare = () => {
    setSelectedVehicles([]);
  };

  const handleCompare = async () => {
    if (selectedVehicles.length < 2) {
      // errorSnackbar('Select at least 2 vehicles to compare');
      return;
    }

    try {
      const result = await getComparison({
        vehicleIds: selectedVehicles.map(v => v._id)
      }).unwrap();
      // successSnackbar('Comparison data retrieved successfully');
      return result;
    } catch (error) {
      // errorSnackbar('Failed to compare vehicles');
      console.error('Comparison error:', error);
    }
  };

  return {
    page,
    setPage,
    searchBy,
    handleSearch,
    selectedVehicles,
    maxVehicles,
    vehiclesData,
    loadingVehicles,
    isFetching,
    loadingCompare,
    isCompareModalOpen,
    setIsCompareModalOpen,
    handleAddToCompare,
    handleRemoveFromCompare,
    handleClearCompare,
    handleCompare,
    filterParams,
    setFilterParams
  };
}