'use client';
import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useGetPostsQuery ,useDeletePostMutation, useSearchPostsQuery} from '@/services/blog/posts';

export default function useAllPosts() {


  const [selectedRecords, setSelectedRecords] = useState([]);
  const [searchBy, setSearchBy] = useState('');
  const [filterParams, setFilterParams] = useState({
    actions: '',
    news: '',
    date: '',
  });

  const [deletePost] = useDeletePostMutation();

  // Search query parameters
  const searchParams = {
    visibility: 'Public',
    categories: filterParams.news || undefined,
    sortBy: 'publishDate',
    sortOrder: filterParams.date === 'oldToNew' ? 'asc' : 'desc',
    page: 1,
    limit: 10,
    query: searchBy || undefined,
  };

  const { data: postsData, isLoading, error } = useSearchPostsQuery(searchParams);

  const handleChangeFilter = (name, value) => {
    setFilterParams(prev => ({ ...prev, [name]: value }));
  };

  const handleClickEditRow = (e, id) => {
    e.stopPropagation();
    console.log('Edit Row', id);
    alert(`Edit Row ${id}`);
  }

  const handleClickDeleteRow = (e, id) => {
    e.stopPropagation();
    alert(`Delete Row ${id}`);
  }

  const handleClickDuplicate = (e, id) => {
    e.stopPropagation();
    alert(`Toggle Row ${id}`);
  }

  const handleSelectAll = (checked, posts) => {
    if (checked) {
      setSelectedRows(posts.map(post => post._id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleBulkAction = async (action) => {
    if (action === 'delete' && selectedRows.length > 0) {
      try {
        if (window.confirm(`Are you sure you want to delete ${selectedRows.length} selected posts?`)) {
          await Promise.all(selectedRows.map(id => deletePost(id)));
          setSelectedRows([]); // Clear selection after deletion
        }
      } catch (error) {
        console.error('Error deleting posts:', error);
      }
    }
  };

  return {
    selectedRecords,
    setSelectedRecords,
    setSearchBy,
    filterParams,
    handleChangeFilter,
    handleClickEditRow,
    handleClickDeleteRow,
    handleClickDuplicate,
    handleSelectAll,
    handleBulkAction,
    posts: postsData?.data?.blogs.map(post => ({...post,id:post._id})) || [],
    totalPosts: postsData?.data?.total || 0,
    isLoading,
    error,
  };
}
