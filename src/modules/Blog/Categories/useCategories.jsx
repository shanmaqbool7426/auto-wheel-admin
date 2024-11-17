'use client';
import { useState } from 'react';
import { 
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useDeleteMultipleCategoriesMutation
} from '@/services/blog/categories';
import { notifications } from '@mantine/notifications';

export default function useCategories() {
  // State
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [searchBy, setSearchBy] = useState('');
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [filterParams, setFilterParams] = useState({
    actions: '',
    news: '',
    date: '',
  });

console.log('isCategoryModalOpen',isCategoryModalOpen)

  // Query parameters
  const searchParams = {
    sortBy: 'createdAt',
    sortOrder: filterParams.date === 'oldToNew' ? 'asc' : 'desc',
    page: 1,
    limit: 10,
    search: searchBy || undefined,
  };

  // API Hooks
  const { data: categoriesData, isLoading } = useGetCategoriesQuery(searchParams);
  const [deleteCategory] = useDeleteCategoryMutation();
  const [deleteMultipleCategories] = useDeleteMultipleCategoriesMutation();

  // Handlers
  const handleChangeFilter = (name, value) => {
    setFilterParams(prev => ({ ...prev, [name]: value }));
  };

  const handleClickEditRow = (e, id) => {
    e.stopPropagation();
    // TODO: Implement edit functionality
    setCategoryModalOpen(true);
  };

  const handleClickDeleteRow = async (e, id) => {
    e.stopPropagation();
    try {
      await deleteCategory(id).unwrap();
      notifications.show({
        title: 'Success',
        message: 'Category deleted successfully',
        color: 'green',
      });
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error?.data?.message || 'Something went wrong',
        color: 'red',
      });
    }
  };

  const handleBulkAction = async (action) => {
    console.log('actionaction', action);

    
    if (!selectedRecords.length) {
      notifications.show({
        title: 'Warning',
        message: 'Please select at least one category',
        color: 'yellow',
      });
      return;
    }

    try {
      if (action === 'delete') {
        const ids = selectedRecords.map(item => item.id);
        await deleteMultipleCategories(ids).unwrap();
        notifications.show({
          title: 'Success',
          message: 'Categories deleted successfully',
          color: 'green',
        });
        setSelectedRecords([]);
      }
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error?.data?.message || 'Something went wrong',
        color: 'red',
      });
    }
  };

  const handleSelectAll = (checked, categories) => {
    if (checked) {
      setSelectedRecords(categories.map(category => ({ id: category._id })));
    } else {
      setSelectedRecords([]);
    }
  };

  return {
    // Data
    categories: categoriesData?.data?.data.map(category => ({
      ...category,
      id: category._id
    })) || [],
    totalCategories: categoriesData?.data?.total || 0,
    isLoading,
    
    // State
    isCategoryModalOpen,
    setCategoryModalOpen,
    selectedRecords,
    setSelectedRecords,
    searchBy,
    setSearchBy,
    filterParams,
    
    // Handlers
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleSelectAll,
    handleBulkAction,
    
  };
}