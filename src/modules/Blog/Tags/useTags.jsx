'use client';
import { useState } from 'react';
import { 
  useGetTagsQuery,
  useDeleteTagMutation,
  useDeleteMultipleTagsMutation 
} from '@/services/blog/tags';
import { notifications } from '@mantine/notifications';

export default function useTags() {
  // State
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  const [searchBy, setSearchBy] = useState('');
  const [filterParams, setFilterParams] = useState({
    actions: '',
    sortBy: 'createdAt',
    sortOrder: 'desc',
  });

  // Debounce search
  // const debouncedSearch = useDebounce(searchBy, 500);

  // Query parameters
  const searchParams = {
    search: searchBy,
    sortBy: filterParams.sortBy,
    sortOrder: filterParams.date === 'oldToNew' ? 'asc' : 'desc',
    page: 1,
    limit: 10,
  };

  // API Hooks
  const { data: tagsData, isLoading } = useGetTagsQuery(searchParams);
  const [deleteTag] = useDeleteTagMutation();
  const [deleteMultipleTags] = useDeleteMultipleTagsMutation();

  // Handlers
  const handleChangeFilter = (name, value) => {
    setFilterParams(prev => ({ ...prev, [name]: value }));
  };

  const handleClickEditRow = (e, id) => {
    e.stopPropagation();
    setIsTagModalOpen(true);
    // TODO: Implement edit functionality
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
    selectedRecords,
    setSelectedRecords,
    isTagModalOpen,
    setIsTagModalOpen,
    searchBy,
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleBulkAction,
    tags: tagsData?.data?.data.map(tag => ({...tag, id: tag._id})) || [],
    totalTags: tagsData?.data?.total || 0,
    isLoading,
  };
}