'use client';
import { useState } from 'react';
import { 
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useDeleteMultipleCategoriesMutation,
  useUpdateCategoryMutation
} from '@/services/blog/categories';
import { notifications } from '@mantine/notifications';

export default function useCategories() {
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [searchBy, setSearchBy] = useState('');
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterParams, setFilterParams] = useState({
    actions: '',
    news: '',
    date: '',
  });

  const searchParams = {
    sortBy: 'createdAt',
    sortOrder: filterParams.date === 'oldToNew' ? 'asc' : 'desc',
    page: 1,
    limit: 10,
    search: searchBy || undefined,
  };

  const { data: categoriesData, isLoading } = useGetCategoriesQuery(searchParams);
  const [deleteCategory] = useDeleteCategoryMutation();
  const [deleteMultipleCategories] = useDeleteMultipleCategoriesMutation();
  const [updateCategory, { isLoading: isUpdating }] = useUpdateCategoryMutation();

  const handleChangeFilter = (name, value) => {
    setFilterParams(prev => ({ ...prev, [name]: value }));
  };

  const handleClickEditRow = (e, id) => {
    e.stopPropagation();
    const categoryToEdit = categoriesData?.data?.data.find(cat => cat._id === id);
    if (categoryToEdit) {
      setSelectedCategory({
        ...categoryToEdit,
        id: categoryToEdit._id
      });
      setCategoryModalOpen(true);
    }
  };


  console.log('selectedCategory',selectedCategory)
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

  const handleUpdateCategory = async (values) => {
    try {
      await updateCategory({
        id: selectedCategory.id,
        ...values
      }).unwrap();
      
      notifications.show({
        title: 'Success',
        message: 'Category updated successfully',
        color: 'green',
      });
      
      setCategoryModalOpen(false);
      setSelectedCategory(null);
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error?.data?.message || 'Failed to update category',
        color: 'red',
      });
    }
  };

  const handleBulkAction = async (action) => {
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
    categories: categoriesData?.data?.data.map(category => ({
      ...category,
      id: category._id
    })) || [],
    totalCategories: categoriesData?.data?.total || 0,
    isLoading,
    isUpdating,
    isCategoryModalOpen,
    setCategoryModalOpen,
    selectedCategory,
    setSelectedCategory,
    selectedRecords,
    setSelectedRecords,
    searchBy,
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleSelectAll,
    handleBulkAction,
    handleUpdateCategory,
  };
}