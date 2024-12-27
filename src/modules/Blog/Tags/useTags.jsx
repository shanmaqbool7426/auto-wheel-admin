'use client';
import { useState } from 'react';
import {
  useGetTagsQuery,
  useDeleteTagMutation,
  useDeleteMultipleTagsMutation,
  useUpdateTagMutation
} from '@/services/blog/tags';
import { notifications } from '@mantine/notifications';

export default function useTags() {
  // State
  const [page, setPage] = useState(1);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchBy, setSearchBy] = useState('');
  const [filterParams, setFilterParams] = useState({
    actions: '',
    sortBy: 'createdAt',
    sortOrder: 'desc',
  });

  // Query parameters
  const searchParams = {
    search: searchBy,
    sortBy: filterParams.sortBy,
    sortOrder: filterParams.date === 'oldToNew' ? 'asc' : 'desc',
    page: 1,
    limit: 10,
  };

  // API Hooks
  const { data: tagsData, isLoading, isFetching } = useGetTagsQuery(searchParams);
  const [deleteTag] = useDeleteTagMutation();
  const [deleteMultipleTags] = useDeleteMultipleTagsMutation();
  const [updateTag, { isLoading: isUpdating }] = useUpdateTagMutation();

  // Handlers
  const handleChangeFilter = (name, value) => {
    setFilterParams(prev => ({ ...prev, [name]: value }));
  };

  const handleClickEditRow = (e, id) => {
    e.stopPropagation();
    const tagToEdit = tagsData?.data?.data.find(tag => tag._id === id);
    if (tagToEdit) {
      setSelectedTag({
        ...tagToEdit,
        id: tagToEdit._id
      });
      setIsTagModalOpen(true);
    }
  };

  const handleUpdateTag = async (values) => {
    try {
      await updateTag({
        id: selectedTag.id,
        ...values
      }).unwrap();

      notifications.show({
        title: 'Success',
        message: 'Tag updated successfully',
        color: 'green',
      });

      setIsTagModalOpen(false);
      setSelectedTag(null);
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: error?.data?.message || 'Failed to update tag',
        color: 'red',
      });
    }
  };

  const handleClickDeleteRow = async (e, id) => {
    e.stopPropagation();
    try {
      await deleteTag(id).unwrap();
      notifications.show({
        title: 'Success',
        message: 'Tag deleted successfully',
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
    if (!selectedRecords.length) {
      notifications.show({
        title: 'Warning',
        message: 'Please select at least one tag',
        color: 'yellow',
      });
      return;
    }

    try {
      if (action === 'delete') {
        const ids = selectedRecords.map(item => item.id);
        await deleteMultipleTags(ids).unwrap();
        notifications.show({
          title: 'Success',
          message: 'Tags deleted successfully',
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

  return {
    page,
    setPage,
    selectedRecords,
    setSelectedRecords,
    isTagModalOpen,
    setIsTagModalOpen,
    selectedTag,
    setSelectedTag,
    searchBy,
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleBulkAction,
    handleUpdateTag,
    tagsData,
    isLoading,
    isFetching,
    isUpdating,
  };
}